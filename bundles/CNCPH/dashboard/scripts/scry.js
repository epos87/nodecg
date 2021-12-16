var card = null; // save card info here to be accessed in other

$(document).ready(function(){
	console.log("ready");

	function searchCards(query){
		var deferred = $.Deferred();
		$.getJSON("https://api.scryfall.com/cards/search", {
			q: query
		})
		.done(function(data){
			// console.log("success: ", data);
			deferred.resolve(data);
		})
		.fail(function(data){
			// console.log("fail: ", data);
			deferred.reject(data);
		});
		return deferred;
	}

	function getCardById(id){
		var deferred = $.Deferred();
		$.getJSON("https://api.scryfall.com/cards/" + id)
		.done(function(data){
			// console.log("success: ", data);
			deferred.resolve(data);
		})
		.fail(function(data){
			// console.log("fail: ", data);
			deferred.reject(data);
		});
		return deferred;
	}

	var cardimage = $("#cardimage");
	var el = document.getElementById('cardread');
	
	initAutocomplete(cardimage, function(data){
		console.log("data: ", data);
		card = getFaces(data);
		console.log("reformatted data: ", data);
		onSearchResult();
		// el.src = data.front.image_uris.png;
		// currentViewFace = "front";
		// if (data.back === null)
		// 	$flipCard.hide();
		// else
		// 	$flipCard.show();
	});
	

	function initAutocomplete($input, callback){
		$input.autocomplete({
			delay: 100,
			source: function(request, response){
				searchCards(request.term).done(function(data){
					response(getCardNames(data.data));
					// console.log("autocomplete data: ", data);
				}).fail(function(data){
					response([]);	// no cards found, return empty array
					// console.log("autocomplete fail");
				}).always(function(){
					// console.log("autocomplete always");
					// el.removeClass("ui-autocomplete-loading");	// prevent loading gif from staying on ui when it isn't supposed to
				});
			},
			select: function(event, ui){
				event.preventDefault();	// prevent input box being set to card id
				$(this).val(ui.item.label);	// set input box to card name
				getCardById(ui.item.value).done(function(data){
					// console.log("select data: ", data);
					// console.log("name: ", data.name);
					// console.log("img url: ", data.image_uris.border_crop);
					if (typeof callback === "function")
						callback.call(this, data);
					// all card data can be accessed here via data
				});
			}
		})
	}
});

function getFaces(data){
	var r = {
		front: null,
		back: null
	};
	// var r = $.extend({}, data, newData);
	if (data.card_faces){
		r.front = $.extend({}, data, data.card_faces[0]);	// add top-level data to this face
		r.back = $.extend({}, data, data.card_faces[1]);	// add top-level data to this face
	} else {
		r.front = $.extend(true, {}, data);
	}
	return r;
}

/**
 * Takes the result from a scryfall query and returns array of card names and values to be used as the 'source' value of $.autocomplete
 * @param array data The array of data that scryfall API returns (example: response.data)
 * @param int optional count The number of names to return
 * @returns array Array of objects with card names and values
 */
function getCardNames(data, count){
	count = typeof count === "undefined" ? 10 : count; // set default count
	count = count > data.length ? data.length : count; // if there's fewer cards than count, use the number of cards

	if (data.length == 0)
		return {};

	var arr = [];
	for (var i = 0; i < count; i++){
		var temp = {
			label: data[i].name,
			value: data[i].id
		};
		arr.push(temp);
	}

	return arr;
}