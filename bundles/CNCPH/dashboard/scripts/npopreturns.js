 cardRep.on('change', (newVal) => {
 	el.src = newVal.front.image_uris.border_crop;
 	currentViewFace = "front";
 	if (newVal.back === null)
 		$flipCard.hide();
 	else
 		$flipCard.show();
 });

poisonyesRep.on ('change', (newVal) => {
	poisonyesRep.value = newVal;
	if (poisonyesRep.value === 1)
	   poisonyes.checked = true;
	else
		poisonyes.checked = false;
});

poisonyesRep.on('change', (newVal) => {
	poisonyesRep.value = newVal;
	if (poisonyesRep.value == 0) {
		for (var i=0; i < poisonyes.length; i++) {
			poisonyes[i].checked = true;}}
	else {
		for (var i=0; i < poisonyes.length; i++) {
			poisonyes[i].checked = false;}}
})