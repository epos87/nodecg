// INPUT FIELDS
p2cncnameRep.on('change', newVal => {
	p2cncname.value = p2cncnameRep.value;
});
p2cncpro1Rep.on('change', newVal => {
	p2cncpro1.value = p2cncpro1Rep.value;
});
p2cncpro2Rep.on('change', newVal => {
	p2cncpro2.value = p2cncpro2Rep.value;
});
p2cnctwitRep.on('change', newVal => {
	p2cnctwit.value = p2cnctwitRep.value;
});
p2commRep.on('change', (newVal) => {
	p2commname.value = p2commRep.value;
});
p2partRep.on('change', (newVal) => {
	p2partname.value = p2partRep.value;
});
p2partyesRep.on('change', (newVal) => {
	p2partyes.value = p2partyesRep.value;
});
p2poisonRep.on('change', (newVal) => {
  p2poison.innerHTML = newVal;
})

// LIFE AND TAXES
const p2El = document.getElementById('p2life');
const p2ccEl = document.getElementById('p2-cc');
const p2pcEl = document.getElementById('p2-pc');
const p2cd1El = document.getElementById('p2-cd-p1');
const p2pd1El = document.getElementById('p2-pd-p1');
const p2cd2El = document.getElementById('p2-cd-p2');
const p2pd2El = document.getElementById('p2-pd-p2');
const p2cd3El = document.getElementById('p2-cd-p3');
const p2pd3El = document.getElementById('p2-pd-p3');
const p2cd4El = document.getElementById('p2-cd-p4');
const p2pd4El = document.getElementById('p2-pd-p4');

p2lifeRep.on('change', (newVal) => {
	p2El.value = parseInt(newVal);
});
p2ccRep.on('change', (newVal) => {
	p2ccEl.innerHTML = newVal;
});
p2pcRep.on('change', (newVal) => {
	p2pcEl.innerHTML = newVal;
});
p2cd1Rep.on('change', (newVal) => {
	p2cd1El.innerHTML = newVal;
});
p2pd1Rep.on('change', (newVal) => {
	p2pd1El.innerHTML = newVal;
});
p2cd2Rep.on('change', (newVal) => {
	p2cd2El.innerHTML = newVal;
});
p2pd2Rep.on('change', (newVal) => {
	p2pd2El.innerHTML = newVal;
});
p2cd3Rep.on('change', (newVal) => {
	p2cd3El.innerHTML = newVal;
});
p2pd3Rep.on('change', (newVal) => {
	p2pd3El.innerHTML = newVal;
});
p2cd4Rep.on('change', (newVal) => {
	p2cd4El.innerHTML = newVal;
});
p2pd4Rep.on('change', (newVal) => {
	p2pd4El.innerHTML = newVal;
});
