const p1ccRep = nodecg.Replicant('p1-cc', {defaultValue: 0});
const p1pcRep = nodecg.Replicant('p1-pc', {defaultValue: 0});
const p1ccpRep = nodecg.Replicant('p1-cc', {defaultValue: 0});
const p1cd1Rep = nodecg.Replicant('p1-cd-p1', {defaultValue: 0});
const p1cd2Rep = nodecg.Replicant('p1-cd-p2', {defaultValue: 0});
const p1cd3Rep = nodecg.Replicant('p1-cd-p3', {defaultValue: 0});
const p1cd4Rep = nodecg.Replicant('p1-cd-p4', {defaultValue: 0});
const p1pd1Rep = nodecg.Replicant('p1-pd-p1', {defaultValue: 0});
const p1pd2Rep = nodecg.Replicant('p1-pd-p2', {defaultValue: 0});
const p1pd3Rep = nodecg.Replicant('p1-pd-p3', {defaultValue: 0});
const p1pd4Rep = nodecg.Replicant('p1-pd-p4', {defaultValue: 0});
const p1cd1pRep = nodecg.Replicant('p1-cd-p1', {defaultValue: 0});
const p2cd1pRep = nodecg.Replicant('p2-cd-p1', {defaultValue: 0});
const p3cd1pRep = nodecg.Replicant('p3-cd-p1', {defaultValue: 0});
const p4cd1pRep = nodecg.Replicant('p4-cd-p1', {defaultValue: 0});

function p1ccup(){
	p1ccRep.value +=2;
}

function p1ccdown(){
	p1ccRep.value -=2;
}

function p1pcup(){
	p1pcRep.value +=2;
}

function p1pcdown(){
	p1pcRep.value -=2;
}

function p1cd1up(){
	p1cd1Rep.value++;
}

function p1cd1down(){
	p1cd1Rep.value--;
}

function p1pd1up(){
	p1pd1Rep.value++;
}

function p1pd1down(){
	p1pd1Rep.value--;
}

function p1cd2up(){
	p1cd2Rep.value++;
}

function p1cd2down(){
	p1cd2Rep.value--;
}

function p1pd2up(){
	p1pd2Rep.value++;
}

function p1pd2down(){
	p1pd2Rep.value--;
}

function p1cd3up(){
	p1cd3Rep.value++;
}

function p1cd3down(){
	p1cd3Rep.value--;
}

function p1pd3up(){
	p1pd3Rep.value++;
}

function p1pd3down(){
	p1pd3Rep.value--;
}

function p1cd4up(){
	p1cd4Rep.value++;
}

function p1cd4down(){
	p1cd4Rep.value--;
}

function p1pd4up(){
	p1pd4Rep.value++;
}

function p1pd4down(){
	p1pd4Rep.value--;
}