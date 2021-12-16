$(document).ready(function(){
	console.log("ready");

	function searchComm(query){
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

	function getCommById(id){
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


	var elsc1 = $(".p1comms");
	var elsp1 = $(".p1parts");
	var elsc2 = $(".p2comms");
	var elsp2 = $(".p2parts");
	var elsc3 = $(".p3comms");
	var elsp3 = $(".p3parts");
	var elsc4 = $(".p4comms");
	var elsp4 = $(".p4parts");
	
	initAutocomplete(elsc1, function(data){
		if (data.card_faces)
			data = getCommFace(data);
		p1commRep.value = data.name;
		p1cmanaRep.value = data.mana_cost;
	});
	initAutocomplete(elsp1, function(data){
		if (data.card_faces)
			data = getCommFace(data);
		p1partRep.value = data.name;
		p1pmanaRep.value = data.mana_cost;
	});
	initAutocomplete(elsc2, function(data){
		if (data.card_faces)
			data = getCommFace(data);
		p2commRep.value = data.name;
		p2cmanaRep.value = data.mana_cost;
	});
	initAutocomplete(elsp2, function(data){
		if (data.card_faces)
			data = getCommFace(data);
		p2partRep.value = data.name;
		p2pmanaRep.value = data.mana_cost;
	});
	initAutocomplete(elsc3, function(data){
		if (data.card_faces)
			data = getCommFace(data);
		p3commRep.value = data.name;
		p3cmanaRep.value = data.mana_cost;
	});
	initAutocomplete(elsp3, function(data){
		if (data.card_faces)
			data = getCommFace(data);
		p3partRep.value = data.name;
		p3pmanaRep.value = data.mana_cost;
	});
	initAutocomplete(elsc4, function(data){
		if (data.card_faces)
			data = getCommFace(data);
		p4commRep.value = data.name;
		p4cmanaRep.value = data.mana_cost;
	});
	initAutocomplete(elsp4, function(data){
		if (data.card_faces)
			data = getCommFace(data);
		p4partRep.value = data.name;
		p4pmanaRep.value = data.mana_cost;
	});


	

	function initAutocomplete($input, callback){
		$input.autocomplete({
			delay: 100,
			source: function(request, response){
				searchComm(request.term).done(function(data){
					response(getCommNames(data.data));
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
				getCommById(ui.item.value).done(function(data){
					console.log("select data: ", data);
					console.log("name: ", data.name);
					console.log("mana cost: ", data.mana_cost);
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

function getCommFace(data){
	return data.card_faces[0];
}

/**
 * Takes the result from a scryfall query and returns array of card names and values to be used as the 'source' value of $.autocomplete
 * @param array data The array of data that scryfall API returns (example: response.data)
 * @param int optional count The number of names to return
 * @returns array Array of objects with card names and values
 */
function getCommNames(data, count){
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