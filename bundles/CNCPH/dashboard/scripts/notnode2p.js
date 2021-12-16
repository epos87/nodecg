// LIFE AND TAXES
const p1El = document.getElementById('p1life');
const p2El = document.getElementById('p2life');

p1lifeRep.on('change', (newVal) => {
	p1El.value = parseInt(newVal);
});

p2lifeRep.on('change', (newVal) => {
	p2El.value = parseInt(newVal);
});

p1poisonRep.on('change', (newVal) => {
  p1poison.innerHTML = newVal;
});

p2poisonRep.on('change', (newVal) => {
  p2poison.innerHTML = newVal;
});