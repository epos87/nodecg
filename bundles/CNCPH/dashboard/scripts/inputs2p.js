const cardRep = nodecg.Replicant('card');
const planeimageRep = nodecg.Replicant('planeimage');

const dice1Rep = nodecg.Replicant('roll-d61');
const dice2Rep = nodecg.Replicant('roll-d62');
const dice3Rep = nodecg.Replicant('roll-d63');
const dice4Rep = nodecg.Replicant('roll-d64');
const coin1Rep = nodecg.Replicant('flip-coin1');
const coin2Rep = nodecg.Replicant('flip-coin2');
const coin3Rep = nodecg.Replicant('flip-coin3');
const coin4Rep = nodecg.Replicant('flip-coin4');

function rollall(){
	d61();
	d62();
};

function d61(){
	currentvalue = dice1Rep.value
	if(currentvalue == 0){
		dice1Rep.value = 1;
	}else{
		dice1Rep.value = 0;
	}
};
function d62(){
	currentvalue = dice2Rep.value
	if(currentvalue == 0){
		dice2Rep.value = 1;
	}else{
		dice2Rep.value = 0;
	}
};
function d63(){
	currentvalue = dice3Rep.value
	if(currentvalue == 0){
		dice3Rep.value = 1;
	}else{
		dice3Rep.value = 0;
	}
};
function d64(){
	currentvalue = dice4Rep.value
	if(currentvalue == 0){
		dice4Rep.value = 1;
	}else{
		dice4Rep.value = 0;
	}
};
function coin1(){
	currentvalue = coin1Rep.value
	if(currentvalue == 0){
		coin1Rep.value = 1;
	}else{
		coin1Rep.value = 0;
	}
};
function coin2(){
	currentvalue = coin2Rep.value
	if(currentvalue == 0){
		coin2Rep.value = 1;
	}else{
		coin2Rep.value = 0;
	}
};
function coin3(){
	currentvalue = coin3Rep.value
	if(currentvalue == 0){
		coin3Rep.value = 1;
	}else{
		coin3Rep.value = 0;
	}
};
function coin4(){
	currentvalue = coin4Rep.value
	if(currentvalue == 0){
		coin4Rep.value = 1;
	}else{
		coin4Rep.value = 0;
	}
};

const planedieRep = nodecg.Replicant('roll-button');
function rollplane(){
	currentvalue = planedieRep.value
	if(currentvalue == 0){
		planedieRep.value = 1;
	}else{
		planedieRep.value = 0;
	}
};
const chaosdieRep = nodecg.Replicant('roll-chaos');
function rollchaos(){
	currentvalue = chaosdieRep.value
	if(currentvalue == 0){
		chaosdieRep.value = 1;
	}else{
		chaosdieRep.value = 0;
	}
};


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
