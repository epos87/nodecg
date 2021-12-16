// show hide functions
var p1all = document.getElementsByClassName('partner1');
var p2all = document.getElementsByClassName('partner2');
var p3all = document.getElementsByClassName('partner3');
var p4all = document.getElementsByClassName('partner4');

p1partyesRep.on('change', (newVal) => {
	p1partyesRep.value = newVal;
	if (p1partyesRep.value == 0) {
		for (var i=0; i < p1all.length; i++) {
			p1all[i].style.display = "none";}}
	else {
		for (var i=0; i < p1all.length; i++) {
			p1all[i].style.display = "table-cell";}}
})
p2partyesRep.on('change', (newVal) => {
	p2partyesRep.value = newVal;
	if (p2partyesRep.value == 0) {
		for (var i=0; i < p2all.length; i++) {
			p2all[i].style.display = "none";}}
	else {
		for (var i=0; i < p2all.length; i++) {
			p2all[i].style.display = "table-cell";}}
})
p3partyesRep.on('change', (newVal) => {
	p3partyesRep.value = newVal;
	if (p3partyesRep.value == 0) {
		for (var i=0; i < p3all.length; i++) {
			p3all[i].style.display = "none";}}
	else {
		for (var i=0; i < p3all.length; i++) {
			p3all[i].style.display = "table-cell";}}
})
p4partyesRep.on('change', (newVal) => {
	p4partyesRep.value = newVal;
	if (p4partyesRep.value == 0) {
		for (var i=0; i < p4all.length; i++) {
			p4all[i].style.display = "none";}}
	else {
		for (var i=0; i < p4all.length; i++) {
			p4all[i].style.display = "table-cell";}}
})

