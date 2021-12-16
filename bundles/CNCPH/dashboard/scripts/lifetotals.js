const p1lifeRep = nodecg.Replicant('p1life', {defaultValue: 0});
const p2lifeRep = nodecg.Replicant('p2life', {defaultValue: 0});
const p3lifeRep = nodecg.Replicant('p3life', {defaultValue: 0});
const p4lifeRep = nodecg.Replicant('p4life', {defaultValue: 0});
const p1poisonRep = nodecg.Replicant('p1poison', {defaultValue: 0});
const p2poisonRep = nodecg.Replicant('p2poison', {defaultValue: 0});
const p3poisonRep = nodecg.Replicant('p3poison', {defaultValue: 0});
const p4poisonRep = nodecg.Replicant('p4poison', {defaultValue: 0});

function p1poisionup(){
	p1poisonRep.value++;
}
function p2poisionup(){
	p2poisonRep.value++;
}
function p3poisionup(){
	p3poisonRep.value++;
}
function p4poisionup(){
	p4poisonRep.value++;
}
function p1poisiondown(){
	p1poisonRep.value--;
}
function p2poisiondown(){
	p2poisonRep.value--;
}
function p3poisiondown(){
	p3poisonRep.value--;
}
function p4poisiondown(){
	p4poisonRep.value--;
}

function p1lifeup1(){
	p1lifeRep.value++;
}
function p1lifedown1(){
	p1lifeRep.value--;
}
function p1lifeup5(){
	p1lifeRep.value += 5;
}
function p1lifedown5(){
	p1lifeRep.value -= 5;
}
function p1lifeup10(){
	p1lifeRep.value += 10;
}
function p1lifedown10(){
	p1lifeRep.value -= 10;
}
function updp1life(){
	p1lifeRep.value = parseInt(p1life.value);
}

function p2lifeup1(){
	p2lifeRep.value++;
}
function p2lifedown1(){
	p2lifeRep.value--;
}
function p2lifeup5(){
	p2lifeRep.value += 5;
}
function p2lifedown5(){
	p2lifeRep.value -= 5;
}
function p2lifeup10(){
	p2lifeRep.value += 10;
}
function p2lifedown10(){
	p2lifeRep.value -= 10;
}
function updp2life(){
	p2lifeRep.value = parseInt(p2life.value);
}


function p3lifeup1(){
	p3lifeRep.value++;
}
function p3lifedown1(){
	p3lifeRep.value--;
}
function p3lifeup5(){
	p3lifeRep.value += 5;
}
function p3lifedown5(){
	p3lifeRep.value -= 5;
}
function p3lifeup10(){
	p3lifeRep.value += 10;
}
function p3lifedown10(){
	p3lifeRep.value -= 10;
}
function updp3life(){
	p3lifeRep.value = parseInt(p3life.value);
}

function p4lifeup1(){
	p4lifeRep.value++;
}
function p4lifedown1(){
	p4lifeRep.value--;
}
function p4lifeup5(){
	p4lifeRep.value += 5;
}
function p4lifedown5(){
	p4lifeRep.value -= 5;
}
function p4lifeup10(){
	p4lifeRep.value += 10;
}
function p4lifedown10(){
	p4lifeRep.value -= 10;
}
function updp4life(){
	p4lifeRep.value = parseInt(p4life.value);
}