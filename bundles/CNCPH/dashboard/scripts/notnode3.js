// INPUT FIELDS
p3cncnameRep.on('change', newVal => {
	p3cncname.value = p3cncnameRep.value;
});
p3cncpro1Rep.on('change', newVal => {
	p3cncpro1.value = p3cncpro1Rep.value;
});
p3cncpro2Rep.on('change', newVal => {
	p3cncpro2.value = p3cncpro2Rep.value;
});
p3cnctwitRep.on('change', newVal => {
	p3cnctwit.value = p3cnctwitRep.value;
});
p3commRep.on('change', (newVal) => {
	p3commname.value = p3commRep.value;
});
p3partRep.on('change', (newVal) => {
	p3partname.value = p3partRep.value;
});
p3partyesRep.on('change', (newVal) => {
	p3partyes.value = p3partyesRep.value;
});
p3poisonRep.on('change', (newVal) => {
  p3poison.innerHTML = newVal;
})

// LIFE AND TAXES
const p3El = document.getElementById('p3life');
const p3ccEl = document.getElementById('p3-cc');
const p3pcEl = document.getElementById('p3-pc');
const p3cd1El = document.getElementById('p3-cd-p1');
const p3pd1El = document.getElementById('p3-pd-p1');
const p3cd2El = document.getElementById('p3-cd-p2');
const p3pd2El = document.getElementById('p3-pd-p2');
const p3cd3El = document.getElementById('p3-cd-p3');
const p3pd3El = document.getElementById('p3-pd-p3');
const p3cd4El = document.getElementById('p3-cd-p4');
const p3pd4El = document.getElementById('p3-pd-p4');

p3lifeRep.on('change', (newVal) => {
	p3El.value = parseInt(newVal);
});
p3ccRep.on('change', (newVal) => {
	p3ccEl.innerHTML = newVal;
});
p3pcRep.on('change', (newVal) => {
	p3pcEl.innerHTML = newVal;
});
p3cd1Rep.on('change', (newVal) => {
	p3cd1El.innerHTML = newVal;
});
p3pd1Rep.on('change', (newVal) => {
	p3pd1El.innerHTML = newVal;
});
p3cd2Rep.on('change', (newVal) => {
	p3cd2El.innerHTML = newVal;
});
p3pd2Rep.on('change', (newVal) => {
	p3pd2El.innerHTML = newVal;
});
p3cd3Rep.on('change', (newVal) => {
	p3cd3El.innerHTML = newVal;
});
p3pd3Rep.on('change', (newVal) => {
	p3pd3El.innerHTML = newVal;
});
p3cd4Rep.on('change', (newVal) => {
	p3cd4El.innerHTML = newVal;
});
p3pd4Rep.on('change', (newVal) => {
	p3pd4El.innerHTML = newVal;
});