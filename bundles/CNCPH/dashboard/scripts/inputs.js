const p1cncnameRep = nodecg.Replicant('p1name', {persistent: "true"});
const p1cncpro1Rep = nodecg.Replicant('p1pro1', {persistent: "true"});
const p1cncpro2Rep = nodecg.Replicant('p1pro2', {persistent: "true"});
const p1cnctwitRep = nodecg.Replicant('p1twit', {persistent: "true"});
const p1E1 = document.getElementById('p1name');
const p1E2 = document.getElementById('p1pro1');
const p1E3 = document.getElementById('p1pro2');
const p1E4 = document.getElementById('p1twit');
const p1partyesRep = nodecg.Replicant('p1partyes', {persistent: "true"});
const p1handleRep = nodecg.Replicant('p1handle', {persistent: "true"});
const p1commRep = nodecg.Replicant('p1commname', {persistent: "true"});
const p1partRep = nodecg.Replicant('p1partname', {persistent: "true"});
const p1cmanaRep = nodecg.Replicant('p1cmana', {persistent: "true"});
const p1pmanaRep = nodecg.Replicant('p1pmana', {persistent: "true"});
const p1commEl = document.getElementById('p1commname');
const p1cmanaEl = document.getElementById('p1cmana');
const p1partEl = document.getElementById('p1partname');
const p1pmanaEl = document.getElementById('p1pmana');

const p2cncnameRep = nodecg.Replicant('p2name', {persistent: "true"});
const p2cncpro1Rep = nodecg.Replicant('p2pro1', {persistent: "true"});
const p2cncpro2Rep = nodecg.Replicant('p2pro2', {persistent: "true"});
const p2cnctwitRep = nodecg.Replicant('p2twit', {persistent: "true"});
const p2E1 = document.getElementById('p2name');
const p2E2 = document.getElementById('p2pro1');
const p2E3 = document.getElementById('p2pro2');
const p2E4 = document.getElementById('p2twit');
const p2partyesRep = nodecg.Replicant('p2partyes', {persistent: "true"});
const p2handleRep = nodecg.Replicant('p2handle', {persistent: "true"});
const p2commRep = nodecg.Replicant('p2commname', {persistent: "true"});
const p2partRep = nodecg.Replicant('p2partname', {persistent: "true"});
const p2cmanaRep = nodecg.Replicant('p2cmana', {persistent: "true"});
const p2pmanaRep = nodecg.Replicant('p2pmana', {persistent: "true"});
const p2commEl = document.getElementById('p2commname');
const p2cmanaEl = document.getElementById('p2cmana');
const p2partEl = document.getElementById('p2partname');
const p2pmanaEl = document.getElementById('p2pmana');

const p3cncnameRep = nodecg.Replicant('p3name', {persistent: "true"});
const p3cncpro1Rep = nodecg.Replicant('p3pro1', {persistent: "true"});
const p3cncpro2Rep = nodecg.Replicant('p3pro2', {persistent: "true"});
const p3cnctwitRep = nodecg.Replicant('p3twit', {persistent: "true"});
const p3E1 = document.getElementById('p3name');
const p3E2 = document.getElementById('p3pro1');
const p3E3 = document.getElementById('p3pro2');
const p3E4 = document.getElementById('p3twit');
const p3partyesRep = nodecg.Replicant('p3partyes', {persistent: "true"});
const p3handleRep = nodecg.Replicant('p3handle', {persistent: "true"});
const p3commRep = nodecg.Replicant('p3commname', {persistent: "true"});
const p3partRep = nodecg.Replicant('p3partname', {persistent: "true"});
const p3cmanaRep = nodecg.Replicant('p3cmana', {persistent: "true"});
const p3pmanaRep = nodecg.Replicant('p3pmana', {persistent: "true"});
const p3commEl = document.getElementById('p3commname');
const p3cmanaEl = document.getElementById('p3cmana');
const p3partEl = document.getElementById('p3partname');
const p3pmanaEl = document.getElementById('p3pmana');

const p4cncnameRep = nodecg.Replicant('p4name', {persistent: "true"});
const p4cncpro1Rep = nodecg.Replicant('p4pro1', {persistent: "true"});
const p4cncpro2Rep = nodecg.Replicant('p4pro2', {persistent: "true"});
const p4cnctwitRep = nodecg.Replicant('p4twit', {persistent: "true"});
const p4E1 = document.getElementById('p4name');
const p4E2 = document.getElementById('p4pro1');
const p4E3 = document.getElementById('p4pro2');
const p4E4 = document.getElementById('p4twit');
const p4partyesRep = nodecg.Replicant('p4partyes', {persistent: "true"});
const p4handleRep = nodecg.Replicant('p4handle', {persistent: "true"});
const p4commRep = nodecg.Replicant('p4commname', {persistent: "true"});
const p4partRep = nodecg.Replicant('p4partname', {persistent: "true"});
const p4cmanaRep = nodecg.Replicant('p4cmana', {persistent: "true"});
const p4pmanaRep = nodecg.Replicant('p4pmana', {persistent: "true"});
const p4commEl = document.getElementById('p4commname');
const p4cmanaEl = document.getElementById('4cmana');
const p4partEl = document.getElementById('p4partname');
const p4pmanaEl = document.getElementById('p4pmana');



function p1partyes(){
	if (document.getElementById('p1partyes').checked === true){
		p1partyesRep.value = 0; }
	else {
		p1partyesRep.value = 1;}
}
function p2partyes(){
	if (document.getElementById('p2partyes').checked === true){
		p2partyesRep.value = 0; }
	else {
		p2partyesRep.value = 1;}
}
function p3partyes(){
	if (document.getElementById('p3partyes').checked === true){
		p3partyesRep.value = 0; }
	else {
		p3partyesRep.value = 1;}
}
function p4partyes(){
	if (document.getElementById('p4partyes').checked === true){
		p4partyesRep.value = 0; }
	else {
		p4partyesRep.value = 1;}
}

function p1handle(){
	var isChecked1 = document.getElementById('p1handle').checked;
	if (isChecked1){
		p1handleRep.value = 0; }
	else {
		p1handleRep.value = 1;}
}
function p2handle(){
	var isChecked2 = document.getElementById('p2handle').checked;
	if (isChecked2){
		p2handleRep.value = 0; }
	else {
		p2handleRep.value = 1;}
}
function p3handle(){
	var isChecked3 = document.getElementById('p3handle').checked;
	if (isChecked3){
		p3handleRep.value = 0; }
	else {
		p3handleRep.value = 1;}
}
function p4handle(){
	var isChecked4 = document.getElementById('p4handle').checked;
	if (isChecked4){
		p4handleRep.value = 0; }
	else {
		p4handleRep.value = 1;}
}
function updp1name(){
	p1cncnameRep.value = p1cncname.value;
}
function updp1pro1(){
	p1cncpro1Rep.value = p1cncpro1.value;
}
function updp1pro2(){
	p1cncpro2Rep.value = p1cncpro2.value;
}
function updp1twit(){
	p1cnctwitRep.value = p1cnctwit.value;
}

function updp2name(){
	p2cncnameRep.value = p2cncname.value;
}
function updp2pro1(){
	p2cncpro1Rep.value = p2cncpro1.value;
}
function updp2pro2(){
	p2cncpro2Rep.value = p2cncpro2.value;
}
function updp2twit(){
	p2cnctwitRep.value = p2cnctwit.value;
}
function updp2c(){
	p2commRep.value = p2commname.value;
}

function updp3name(){
	p3cncnameRep.value = p3cncname.value;
}
function updp3pro1(){
	p3cncpro1Rep.value = p3cncpro1.value;
}
function updp3pro2(){
	p3cncpro2Rep.value = p3cncpro2.value;
}
function updp3twit(){
	p3cnctwitRep.value = p3cnctwit.value;
}

function updp4name(){
	p4cncnameRep.value = p4cncname.value;
}
function updp4pro1(){
	p4cncpro1Rep.value = p4cncpro1.value;
}
function updp4pro2(){
	p4cncpro2Rep.value = p4cncpro2.value;
}
function updp4twit(){
	p4cnctwitRep.value = p4cnctwit.value;
}

// sets current checkmark state for checkboxes

p1partyesRep.on('change', (newVal) => {
	p1partyesRep.value = newVal;
	if (p1partyesRep.value == 1) {
		document.getElementById("p1partyes").checked = true;} 
	else {
		document.getElementById("p1partyes").checked = false;}
})
p2partyesRep.on('change', (newVal) => {
	p2partyesRep.value = newVal;
	if (p2partyesRep.value == 1) {
		document.getElementById("p2partyes").checked = true;} 
	else {
		document.getElementById("p2partyes").checked = false;}
})
p3partyesRep.on('change', (newVal) => {
	p3partyesRep.value = newVal;
	if (p3partyesRep.value == 1) {
		document.getElementById("p3partyes").checked = true;} 
	else {
		document.getElementById("p3partyes").checked = false;}
})
p4partyesRep.on('change', (newVal) => {
	p4partyesRep.value = newVal;
	if (p4partyesRep.value == 1) {
		document.getElementById("p4partyes").checked = true;} 
	else {
		document.getElementById("p4partyes").checked = false;}
})

p1handleRep.on('change', (newVal) => {
	p1handleRep.value = newVal;
	if (p1handleRep.value == 1) {
		document.getElementById("p1handle").checked = true;} 
	else {
		document.getElementById("p1handle").checked = false;}
})
p2handleRep.on('change', (newVal) => {
	p2handleRep.value = newVal;
	if (p2handleRep.value == 1) {
		document.getElementById("p2handle").checked = true;} 
	else {
		document.getElementById("p2handle").checked = false;}
})
p3handleRep.on('change', (newVal) => {
	p3handleRep.value = newVal;
	if (p3handleRep.value == 1) {
		document.getElementById("p3handle").checked = true;} 
	else {
		document.getElementById("p3handle").checked = false;}
})
p4handleRep.on('change', (newVal) => {
	p4handleRep.value = newVal;
	if (p4handleRep.value == 1) {
		document.getElementById("p4handle").checked = true;} 
	else {
		document.getElementById("p4handle").checked = false;}
})

function checker() {
        switch (checker.keyCode) {
            case 8:  // Backspace
            case 9:  // Tab
            case 13: // Enter
            case 16: // shift
            case 37: // Left
            case 38: // Up
            case 39: // Right
            case 40: // Down
            break;
            default:
            var regex = new RegExp("^[a-zA-Z0-9_]*$");
            var key = event.key;
            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }
            break;
        }
};
