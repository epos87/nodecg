const cardimage = document.getElementById('cardimage');

var el = document.getElementById('cardread');

var currentViewFace = null;
var $flipCard = $('#flipCard');

function onSearchResult(){
	el.src = card.front.image_uris.border_crop;
	currentViewFace = "front";
	if (card.back === null)
		$flipCard.hide();
	else
		$flipCard.show();
}


function flipcard(){
	if (currentViewFace == "front"){
		el.src = card.back.image_uris.border_crop;
		currentViewFace = "back";
	} else {
		el.src = card.front.image_uris.border_crop;
		currentViewFace = "front";
	}
}