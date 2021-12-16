const p1lifeRep = nodecg.Replicant('p1life', {defaultValue: 0});
const p2lifeRep = nodecg.Replicant('p2life', {defaultValue: 0});
const p3lifeRep = nodecg.Replicant('p3life', {defaultValue: 0});
const p4lifeRep = nodecg.Replicant('p4life', {defaultValue: 0});

const p1poisonRep = nodecg.Replicant('p1poison', {defaultValue: 0});
const p2poisonRep = nodecg.Replicant('p2poison', {defaultValue: 0});
const p3poisonRep = nodecg.Replicant('p3poison', {defaultValue: 0});
const p4poisonRep = nodecg.Replicant('p4poison', {defaultValue: 0});

const p1cncnameRep = nodecg.Replicant('p1name', {persistent: "true"});
const p2cncnameRep = nodecg.Replicant('p2name', {persistent: "true"});
const p3cncnameRep = nodecg.Replicant('p3name', {persistent: "true"});
const p4cncnameRep = nodecg.Replicant('p4name', {persistent: "true"});

const p1cncpro1Rep = nodecg.Replicant('p1pro1', {persistent: "true"});
const p2cncpro1Rep = nodecg.Replicant('p2pro1', {persistent: "true"});
const p3cncpro1Rep = nodecg.Replicant('p3pro1', {persistent: "true"});
const p4cncpro1Rep = nodecg.Replicant('p4pro1', {persistent: "true"});

const p1cncpro2Rep = nodecg.Replicant('p1pro2', {persistent: "true"});
const p2cncpro2Rep = nodecg.Replicant('p2pro2', {persistent: "true"});
const p3cncpro2Rep = nodecg.Replicant('p3pro2', {persistent: "true"});
const p4cncpro2Rep = nodecg.Replicant('p4pro2', {persistent: "true"});

const p1cnctwitRep = nodecg.Replicant('p1twit', {persistent: "true"});
const p2cnctwitRep = nodecg.Replicant('p2twit', {persistent: "true"});
const p3cnctwitRep = nodecg.Replicant('p3twit', {persistent: "true"});
const p4cnctwitRep = nodecg.Replicant('p4twit', {persistent: "true"});

const p1partyesRep = nodecg.Replicant('p1partyes', {persistent: "true"});
const p2partyesRep = nodecg.Replicant('p2partyes', {persistent: "true"});
const p3partyesRep = nodecg.Replicant('p3partyes', {persistent: "true"});
const p4partyesRep = nodecg.Replicant('p4partyes', {persistent: "true"});

const p1handleRep = nodecg.Replicant('p1handle', {persistent: "true"});
const p2handleRep = nodecg.Replicant('p2handle', {persistent: "true"});
const p3handleRep = nodecg.Replicant('p3handle', {persistent: "true"});
const p4handleRep = nodecg.Replicant('p4handle', {persistent: "true"});

const p1commRep = nodecg.Replicant('p1commname', {persistent: "true"});
const p2commRep = nodecg.Replicant('p2commname', {persistent: "true"});
const p3commRep = nodecg.Replicant('p3commname', {persistent: "true"});
const p4commRep = nodecg.Replicant('p4commname', {persistent: "true"});

const p1partRep = nodecg.Replicant('p1partname', {persistent: "true"});
const p2partRep = nodecg.Replicant('p2partname', {persistent: "true"});
const p3partRep = nodecg.Replicant('p3partname', {persistent: "true"});
const p4partRep = nodecg.Replicant('p4partname', {persistent: "true"});

const p1cmanaRep = nodecg.Replicant('p1cmana', {persistent: "true"});
const p2cmanaRep = nodecg.Replicant('p2cmana', {persistent: "true"});
const p3cmanaRep = nodecg.Replicant('p3cmana', {persistent: "true"});
const p4cmanaRep = nodecg.Replicant('p4cmana', {persistent: "true"});

const p1pmanaRep = nodecg.Replicant('p1pmana', {persistent: "true"});
const p2pmanaRep = nodecg.Replicant('p2pmana', {persistent: "true"});
const p3pmanaRep = nodecg.Replicant('p3pmana', {persistent: "true"});
const p4pmanaRep = nodecg.Replicant('p4pmana', {persistent: "true"});

const p1ccRep = nodecg.Replicant('p1-cc', {defaultValue: 0});
const p2ccRep = nodecg.Replicant('p2-cc', {defaultValue: 0});
const p3ccRep = nodecg.Replicant('p3-cc', {defaultValue: 0});
const p4ccRep = nodecg.Replicant('p4-cc', {defaultValue: 0});

const p1pcRep = nodecg.Replicant('p1-pc', {defaultValue: 0});
const p2pcRep = nodecg.Replicant('p2-pc', {defaultValue: 0});
const p3pcRep = nodecg.Replicant('p3-pc', {defaultValue: 0});
const p4pcRep = nodecg.Replicant('p4-pc', {defaultValue: 0});

const p1cd1Rep = nodecg.Replicant('p1-cd-p1', {defaultValue: 0});
const p1cd2Rep = nodecg.Replicant('p1-cd-p2', {defaultValue: 0});
const p1cd3Rep = nodecg.Replicant('p1-cd-p3', {defaultValue: 0});
const p1cd4Rep = nodecg.Replicant('p1-cd-p4', {defaultValue: 0});
const p1pd1Rep = nodecg.Replicant('p1-pd-p1', {defaultValue: 0});
const p1pd2Rep = nodecg.Replicant('p1-pd-p2', {defaultValue: 0});
const p1pd3Rep = nodecg.Replicant('p1-pd-p3', {defaultValue: 0});
const p1pd4Rep = nodecg.Replicant('p1-pd-p4', {defaultValue: 0});

const p2cd1Rep = nodecg.Replicant('p2-cd-p1', {defaultValue: 0});
const p2cd2Rep = nodecg.Replicant('p2-cd-p2', {defaultValue: 0});
const p2cd3Rep = nodecg.Replicant('p2-cd-p3', {defaultValue: 0});
const p2cd4Rep = nodecg.Replicant('p2-cd-p4', {defaultValue: 0});
const p2pd1Rep = nodecg.Replicant('p2-pd-p1', {defaultValue: 0});
const p2pd2Rep = nodecg.Replicant('p2-pd-p2', {defaultValue: 0});
const p2pd3Rep = nodecg.Replicant('p2-pd-p3', {defaultValue: 0});
const p2pd4Rep = nodecg.Replicant('p2-pd-p4', {defaultValue: 0});

const p3cd1Rep = nodecg.Replicant('p3-cd-p1', {defaultValue: 0});
const p3cd2Rep = nodecg.Replicant('p3-cd-p2', {defaultValue: 0});
const p3cd3Rep = nodecg.Replicant('p3-cd-p3', {defaultValue: 0});
const p3cd4Rep = nodecg.Replicant('p3-cd-p4', {defaultValue: 0});
const p3pd1Rep = nodecg.Replicant('p3-pd-p1', {defaultValue: 0});
const p3pd2Rep = nodecg.Replicant('p3-pd-p2', {defaultValue: 0});
const p3pd3Rep = nodecg.Replicant('p3-pd-p3', {defaultValue: 0});
const p3pd4Rep = nodecg.Replicant('p3-pd-p4', {defaultValue: 0});

const p4cd1Rep = nodecg.Replicant('p4-cd-p1', {defaultValue: 0});
const p4cd2Rep = nodecg.Replicant('p4-cd-p2', {defaultValue: 0});
const p4cd3Rep = nodecg.Replicant('p4-cd-p3', {defaultValue: 0});
const p4cd4Rep = nodecg.Replicant('p4-cd-p4', {defaultValue: 0});
const p4pd1Rep = nodecg.Replicant('p4-pd-p1', {defaultValue: 0});
const p4pd2Rep = nodecg.Replicant('p4-pd-p2', {defaultValue: 0});
const p4pd3Rep = nodecg.Replicant('p4-pd-p3', {defaultValue: 0});
const p4pd4Rep = nodecg.Replicant('p4-pd-p4', {defaultValue: 0});