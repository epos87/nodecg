const p4ccRep = nodecg.Replicant('p4-cc', {defaultValue: 0});
const p4pcRep = nodecg.Replicant('p4-pc', {defaultValue: 0});
const p4cd1Rep = nodecg.Replicant('p4-cd-p1', {defaultValue: 0});
const p4pd1Rep = nodecg.Replicant('p4-pd-p1', {defaultValue: 0});
const p4cd2Rep = nodecg.Replicant('p4-cd-p2', {defaultValue: 0});
const p4pd2Rep = nodecg.Replicant('p4-pd-p2', {defaultValue: 0});
const p4cd3Rep = nodecg.Replicant('p4-cd-p3', {defaultValue: 0});
const p4pd3Rep = nodecg.Replicant('p4-pd-p3', {defaultValue: 0});
const p4cd4Rep = nodecg.Replicant('p4-cd-p4', {defaultValue: 0});
const p4pd4Rep = nodecg.Replicant('p4-pd-p4', {defaultValue: 0});

function p4ccup(){
	p4ccRep.value +=2;
}

function p4ccdown(){
	p4ccRep.value -=2;
}

function p4pcup(){
	p4pcRep.value +=2;
}

function p4pcdown(){
	p4pcRep.value -=2;
}

function p4cd1up(){
	p4cd1Rep.value++;
}

function p4cd1down(){
	p4cd1Rep.value--;
}

function p4pd1up(){
	p4pd1Rep.value++;
}

function p4pd1down(){
	p4pd1Rep.value--;
}

function p4cd2up(){
	p4cd2Rep.value++;
}

function p4cd2down(){
	p4cd2Rep.value--;
}

function p4pd2up(){
	p4pd2Rep.value++;
}

function p4pd2down(){
	p4pd2Rep.value--;
}

function p4cd3up(){
	p4cd3Rep.value++;
}

function p4cd3down(){
	p4cd3Rep.value--;
}

function p4pd3up(){
	p4pd3Rep.value++;
}

function p4pd3down(){
	p4pd3Rep.value--;
}

function p4cd4up(){
	p4cd4Rep.value++;
}

function p4cd4down(){
	p4cd4Rep.value--;
}

function p4pd4up(){
	p4pd4Rep.value++;
}

function p4pd4down(){
	p4pd4Rep.value--;
}

