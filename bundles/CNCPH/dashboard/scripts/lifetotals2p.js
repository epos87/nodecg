const p1lifeRep = nodecg.Replicant('p1life', {defaultValue: 0});
const p2lifeRep = nodecg.Replicant('p2life', {defaultValue: 0});
const p1poisonRep = nodecg.Replicant('p1poison', {defaultValue: 0});
const p2poisonRep = nodecg.Replicant('p2poison', {defaultValue: 0});

function lifereset(){
	p1lifeRep.value = 20;
	p2lifeRep.value = 20;
}

function p1lifeup1(){
	p1lifeRep.value++;
}
function p2lifeup1(){
	p2lifeRep.value++;
}

function p1lifedown1(){
	p1lifeRep.value--;
}
function p2lifedown1(){
	p2lifeRep.value--;
}

function p1lifeup5(){
	p1lifeRep.value += 5;
}
function p2lifeup5(){
	p2lifeRep.value += 5;
}

function p2lifedown5(){
	p2lifeRep.value -= 5;
}
function p1lifedown5(){
	p1lifeRep.value -= 5;
}

function p1drain(){
	p1lifeRep.value ++;
	p2lifeRep.value --;
}
function p2drain(){
	p1lifeRep.value --;
	p2lifeRep.value ++;
}

function updp1life(){
	p1lifeRep.value = parseInt(p1life.value);
}
function updp2life(){
	p2lifeRep.value = parseInt(p2life.value);
}

function p1poisionup(){
	p1poisonRep.max = 10;
	p1poisonRep.value++;
}
function p2poisionup(){
	p2poisonRep.max = 10;
	p2poisonRep.value++;
}
function p1poisiondown(){
	p1poisonRep.min = 0;
	p1poisonRep.value--;
}
function p2poisiondown(){
	p2poisonRep.min = 0;
	p2poisonRep.value--;
}