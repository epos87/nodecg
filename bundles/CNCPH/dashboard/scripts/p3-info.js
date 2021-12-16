const p3ccRep = nodecg.Replicant('p3-cc', {defaultValue: 0});
const p3pcRep = nodecg.Replicant('p3-pc', {defaultValue: 0});
const p3cd1Rep = nodecg.Replicant('p3-cd-p1', {defaultValue: 0});
const p3pd1Rep = nodecg.Replicant('p3-pd-p1', {defaultValue: 0});
const p3cd2Rep = nodecg.Replicant('p3-cd-p2', {defaultValue: 0});
const p3pd2Rep = nodecg.Replicant('p3-pd-p2', {defaultValue: 0});
const p3cd3Rep = nodecg.Replicant('p3-cd-p3', {defaultValue: 0});
const p3pd3Rep = nodecg.Replicant('p3-pd-p3', {defaultValue: 0});
const p3cd4Rep = nodecg.Replicant('p3-cd-p4', {defaultValue: 0});
const p3pd4Rep = nodecg.Replicant('p3-pd-p4', {defaultValue: 0});

function p3ccup(){
	p3ccRep.value +=2;
}

function p3ccdown(){
	p3ccRep.value -=2;
}

function p3pcup(){
	p3pcRep.value +=2;
}

function p3pcdown(){
	p3pcRep.value -=2;
}

function p3cd1up(){
	p3cd1Rep.value++;
}

function p3cd1down(){
	p3cd1Rep.value--;
}

function p3pd1up(){
	p3pd1Rep.value++;
}

function p3pd1down(){
	p3pd1Rep.value--;
}

function p3cd2up(){
	p3cd2Rep.value++;
}

function p3cd2down(){
	p3cd2Rep.value--;
}

function p3pd2up(){
	p3pd2Rep.value++;
}

function p3pd2down(){
	p3pd2Rep.value--;
}

function p3cd3up(){
	p3cd3Rep.value++;
}

function p3cd3down(){
	p3cd3Rep.value--;
}

function p3pd3up(){
	p3pd3Rep.value++;
}

function p3pd3down(){
	p3pd3Rep.value--;
}

function p3cd4up(){
	p3cd4Rep.value++;
}

function p3cd4down(){
	p3cd4Rep.value--;
}

function p3pd4up(){
	p3pd4Rep.value++;
}

function p3pd4down(){
	p3pd4Rep.value--;
}

