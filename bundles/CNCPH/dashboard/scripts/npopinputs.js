const poisonyesRep = nodecg.Replicant('poisonyes');
function poisonyes(){
	if (document.getElementById('poisonyes').checked === true){
		poisonyesRep.value = 0; }
	else {
		poisonyesRep.value = 1;}
}

function lifereset(){
	p1lifeRep.value = 40;
	p2lifeRep.value = 40;
	p3lifeRep.value = 40;
	p4lifeRep.value = 40;
	p1poisonRep.value = 0;
	p2poisonRep.value = 0;
	p3poisonRep.value = 0;
	p4poisonRep.value = 0;
}

function p1inforeset(){
	p1ccRep.value = 0;
	p1pcRep.value = 0;
	p1cd1Rep.value = 0;
	p1cd2Rep.value = 0;
	p1cd3Rep.value = 0;
	p1cd4Rep.value = 0;
	p1pd1Rep.value = 0;
	p1pd2Rep.value = 0;
	p1pd3Rep.value = 0;
	p1pd4Rep.value = 0;
}

function p2inforeset(){
	p2ccRep.value = 0;
	p2pcRep.value = 0;
	p2cd1Rep.value = 0;
	p2pd1Rep.value = 0;
	p2cd2Rep.value = 0;
	p2pd2Rep.value = 0;
	p2cd3Rep.value = 0;
	p2pd3Rep.value = 0;
	p2cd4Rep.value = 0;
	p2pd4Rep.value = 0;
}

function p3inforeset(){
	p3ccRep.value = 0;
	p3pcRep.value = 0;
	p3cd1Rep.value = 0;
	p3pd1Rep.value = 0;
	p3cd2Rep.value = 0;
	p3pd2Rep.value = 0;
	p3cd3Rep.value = 0;
	p3pd3Rep.value = 0;
	p3cd4Rep.value = 0;
	p3pd4Rep.value = 0;
}

function p4inforeset(){
	p4ccRep.value = 0;
	p4pcRep.value = 0;
	p4cd1Rep.value = 0;
	p4pd1Rep.value = 0;
	p4cd2Rep.value = 0;
	p4pd2Rep.value = 0;
	p4cd3Rep.value = 0;
	p4pd3Rep.value = 0;
	p4cd4Rep.value = 0;
	p4pd4Rep.value = 0;
}

function p1clear(){
	p1cncnameRep.value = "";
	p1cncpro1Rep.value = "";
	p1cncpro2Rep.value = "";
	p1cnctwitRep.value = "";
	p1partyesRep.value = 0;
	p1handleRep.value= 1;
	p1commRep.value = "";
	p1partRep.value = "";
	p1cmanaRep.value = "";
	p1pmanaRep.value = "";
}

function p3clear(){
	p3cncnameRep.value = "";
	p3cncpro1Rep.value = "";
	p3cncpro2Rep.value = "";
	p3cnctwitRep.value = "";
	p3partyesRep.value = 0;
	p3handleRep.value= 1;
	p3commRep.value = "";
	p3partRep.value = "";
	p3cmanaRep.value = "";
	p3pmanaRep.value = "";
}

function p4clear(){
	p4cncnameRep.value = "";
	p4cncpro1Rep.value = "";
	p4cncpro2Rep.value = "";
	p4cnctwitRep.value = "";
	p4partyesRep.value = 0;
	p4handleRep.value= 1;
	p4commRep.value = "";
	p4partRep.value = "";
	p4cmanaRep.value = "";
	p4pmanaRep.value = "";
}

function p1clay(){
	p1cncnameRep.value = "Claybee";
	p1cncpro1Rep.value = "they";
	p1cncpro2Rep.value = "them";
	p1cnctwitRep.value = "mtg_claybee";
	p1partyesRep.value = 0;
	p1handleRep.value= 0;
}

function p3clay(){
	p3cncnameRep.value = "Claybee";
	p3cncpro1Rep.value = "they";
	p3cncpro2Rep.value = "them";
	p3cnctwitRep.value = "mtg_claybee";
	p3partyesRep.value = 0;
	p3handleRep.value= 0;
}

function p4clay(){
	p4cncnameRep.value = "Claybee";
	p4cncpro1Rep.value = "they";
	p4cncpro2Rep.value = "them";
	p4cnctwitRep.value = "mtg_claybee";
	p4partyesRep.value = 0;
	p4handleRep.value= 0;
}