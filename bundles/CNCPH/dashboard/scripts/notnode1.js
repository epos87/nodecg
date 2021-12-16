// INPUT FIELDS
p1cncnameRep.on('change', newVal => {
	p1cncname.value = p1cncnameRep.value;
});
p1cncpro1Rep.on('change', newVal => {
	p1cncpro1.value = p1cncpro1Rep.value;
});
p1cncpro2Rep.on('change', newVal => {
	p1cncpro2.value = p1cncpro2Rep.value;
});
p1cnctwitRep.on('change', newVal => {
	p1cnctwit.value = p1cnctwitRep.value;
});
p1commRep.on('change', (newVal) => {
	p1commname.value = p1commRep.value;
});
p1partRep.on('change', (newVal) => {
	p1partname.value = p1partRep.value;
});
p1partyesRep.on('change', (newVal) => {
	p1partyes.value = p1partyesRep.value;
});
p1poisonRep.on('change', (newVal) => {
  p1poison.innerHTML = newVal;
})

// LIFE AND TAXES
const p1El = document.getElementById('p1life');
const p1ccEl = document.getElementById('p1-cc');
const p1pcEl = document.getElementById('p1-pc');
const p1cd1El = document.getElementById('p1-cd-p1');
const p1pd1El = document.getElementById('p1-pd-p1');
const p1cd2El = document.getElementById('p1-cd-p2');
const p1pd2El = document.getElementById('p1-pd-p2');
const p1cd3El = document.getElementById('p1-cd-p3');
const p1pd3El = document.getElementById('p1-pd-p3');
const p1cd4El = document.getElementById('p1-cd-p4');
const p1pd4El = document.getElementById('p1-pd-p4');

p1lifeRep.on('change', (newVal) => {
	p1El.value = parseInt(newVal);
});
p1ccRep.on('change', (newVal) => {
	p1ccEl.innerHTML = newVal;
});
p1pcRep.on('change', (newVal) => {
	p1pcEl.innerHTML = newVal;
});
p1cd1Rep.on('change', (newVal) => {
	p1cd1El.innerHTML = newVal;
});
p1pd1Rep.on('change', (newVal) => {
	p1pd1El.innerHTML = newVal;
});
p1cd2Rep.on('change', (newVal) => {
	p1cd2El.innerHTML = newVal;
});
p1pd2Rep.on('change', (newVal) => {
	p1pd2El.innerHTML = newVal;
});
p1cd3Rep.on('change', (newVal) => {
	p1cd3El.innerHTML = newVal;
});
p1pd3Rep.on('change', (newVal) => {
	p1pd3El.innerHTML = newVal;
});
p1cd4Rep.on('change', (newVal) => {
	p1cd4El.innerHTML = newVal;
});
p1pd4Rep.on('change', (newVal) => {
	p1pd4El.innerHTML = newVal;
});