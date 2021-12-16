// show hide functions
const faceRep = nodecg.Replicant('currentViewFace');
var el = document.getElementById('cardread');
var $flipCard = $('#flipCard');
var currentViewFace = null;

d2Rep.on('change', (newVal) => {
	d1.innerHTML = newVal;
})
d1Rep.on('change', (newVal) => {
	d2.innerHTML = newVal;
})

planeimageRep.on('change', (newVal) => {
	document.getElementById('planereader').src = newVal;
})

function flipcard(){
	if (currentViewFace == "front"){
		el.src = cardRep.value.back.image_uris.border_crop;
		currentViewFace = "back";
	} else {
		el.src = cardRep.value.front.image_uris.border_crop;
		currentViewFace = "front";
	}
	faceRep.value = el.src;
}
