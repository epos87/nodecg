// INPUT FIELDS
p4cncnameRep.on('change', newVal => {
	p4cncname.value = p4cncnameRep.value;
});
p4cncpro1Rep.on('change', newVal => {
	p4cncpro1.value = p4cncpro1Rep.value;
});
p4cncpro2Rep.on('change', newVal => {
	p4cncpro2.value = p4cncpro2Rep.value;
});
p4cnctwitRep.on('change', newVal => {
	p4cnctwit.value = p4cnctwitRep.value;
});
p4commRep.on('change', (newVal) => {
	p4commname.value = p4commRep.value;
});
p4partRep.on('change', (newVal) => {
	p4partname.value = p4partRep.value;
});
p4partyesRep.on('change', (newVal) => {
	p4partyes.value = p4partyesRep.value;
});
p4poisonRep.on('change', (newVal) => {
  p4poison.innerHTML = newVal;
})

// LIFE AND TAXES
const p4El = document.getElementById('p4life');
const p4ccEl = document.getElementById('p4-cc');
const p4pcEl = document.getElementById('p4-pc');
const p4cd1El = document.getElementById('p4-cd-p1');
const p4pd1El = document.getElementById('p4-pd-p1');
const p4cd2El = document.getElementById('p4-cd-p2');
const p4pd2El = document.getElementById('p4-pd-p2');
const p4cd3El = document.getElementById('p4-cd-p3');
const p4pd3El = document.getElementById('p4-pd-p3');
const p4cd4El = document.getElementById('p4-cd-p4');
const p4pd4El = document.getElementById('p4-pd-p4');

p4lifeRep.on('change', (newVal) => {
	p4El.value = parseInt(newVal);
});
p4ccRep.on('change', (newVal) => {
	p4ccEl.innerHTML = newVal;
});
p4pcRep.on('change', (newVal) => {
	p4pcEl.innerHTML = newVal;
});
p4cd1Rep.on('change', (newVal) => {
	p4cd1El.innerHTML = newVal;
});
p4pd1Rep.on('change', (newVal) => {
	p4pd1El.innerHTML = newVal;
});
p4cd2Rep.on('change', (newVal) => {
	p4cd2El.innerHTML = newVal;
});
p4pd2Rep.on('change', (newVal) => {
	p4pd2El.innerHTML = newVal;
});
p4cd3Rep.on('change', (newVal) => {
	p4cd3El.innerHTML = newVal;
});
p4pd3Rep.on('change', (newVal) => {
	p4pd3El.innerHTML = newVal;
});
p4cd4Rep.on('change', (newVal) => {
	p4cd4El.innerHTML = newVal;
});
p4pd4Rep.on('change', (newVal) => {
	p4pd4El.innerHTML = newVal;
});

function streamurl() {
    var new_url = document.getElementById('streamurl');
    var ifr = document.getElementsByName('streamfeed')[0];
    ifr.src = "https://cncpowerhour.com/obs/?scene=0&room=cncph&novideo=chris&noaudio=player1face,player1mat,player2face,player2mat,player3face,player3mat,cnc" + new_url.value;
	console.log(ifr.src);
}
