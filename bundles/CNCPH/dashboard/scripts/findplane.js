$(document).ready(function(){
	console.log("ready");

	function searchPlanes(query){
		var deferred = $.Deferred();
		$.getJSON("https://api.scryfall.com/cards/search", {
			q: "s:opca " + query
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

	function getPlanebyId(id){
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

	var planeimage = $("#planeimage");
	
	initAutocomplete(planeimage, function(data){
		if (data.card_faces)
			data = getPlaneFace(data);
		planeimageRep.value = data.image_uris.border_crop;
	});
	

	function initAutocomplete($input, callback){
		$input.autocomplete({
			delay: 100,
			source: function(request, response){
				searchPlanes(request.term).done(function(data){
					response(getPlaneNames(data.data));
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
				getPlanebyId(ui.item.value).done(function(data){
					console.log("select data: ", data);
					console.log("name: ", data.name);
					console.log("img url: ", data.image_uris.border_crop);
					if (typeof callback === "function")
						callback.call(this, data);
					// p1commRep.value = data.name;
					// p1cmanaRep.value = data.mana_cost;
					// all card data can be accessed here via data
				});
			}
		})
	}
});

function getPlaneFace(data){
	return data.card_faces[0];
}

/**
 * Takes the result from a scryfall query and returns array of card names and values to be used as the 'source' value of $.autocomplete
 * @param array data The array of data that scryfall API returns (example: response.data)
 * @param int optional count The number of names to return
 * @returns array Array of objects with card names and values
 */
function getPlaneNames(data, count){
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
