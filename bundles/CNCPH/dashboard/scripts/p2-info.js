const p2ccRep = nodecg.Replicant('p2-cc', {defaultValue: 0});
const p2pcRep = nodecg.Replicant('p2-pc', {defaultValue: 0});
const p2cd1Rep = nodecg.Replicant('p2-cd-p1', {defaultValue: 0});
const p2pd1Rep = nodecg.Replicant('p2-pd-p1', {defaultValue: 0});
const p2cd2Rep = nodecg.Replicant('p2-cd-p2', {defaultValue: 0});
const p2pd2Rep = nodecg.Replicant('p2-pd-p2', {defaultValue: 0});
const p2cd3Rep = nodecg.Replicant('p2-cd-p3', {defaultValue: 0});
const p2pd3Rep = nodecg.Replicant('p2-pd-p3', {defaultValue: 0});
const p2cd4Rep = nodecg.Replicant('p2-cd-p4', {defaultValue: 0});
const p2pd4Rep = nodecg.Replicant('p2-pd-p4', {defaultValue: 0});

function p2ccup(){
	p2ccRep.value +=2;
}

function p2ccdown(){
	p2ccRep.value -=2;
}

function p2pcup(){
	p2pcRep.value +=2;
}

function p2pcdown(){
	p2pcRep.value -=2;
}

function p2cd1up(){
	p2cd1Rep.value++;
}

function p2cd1down(){
	p2cd1Rep.value--;
}

function p2pd1up(){
	p2pd1Rep.value++;
}

function p2pd1down(){
	p2pd1Rep.value--;
}

function p2cd2up(){
	p2cd2Rep.value++;
}

function p2cd2down(){
	p2cd2Rep.value--;
}

function p2pd2up(){
	p2pd2Rep.value++;
}

function p2pd2down(){
	p2pd2Rep.value--;
}

function p2cd3up(){
	p2cd3Rep.value++;
}

function p2cd3down(){
	p2cd3Rep.value--;
}

function p2pd3up(){
	p2pd3Rep.value++;
}

function p2pd3down(){
	p2pd3Rep.value--;
}

function p2cd4up(){
	p2cd4Rep.value++;
}

function p2cd4down(){
	p2cd4Rep.value--;
}

function p2pd4up(){
	p2pd4Rep.value++;
}

function p2pd4down(){
	p2pd4Rep.value--;
}