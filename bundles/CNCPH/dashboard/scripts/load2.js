var id = new URLSearchParams(window.location.search).get('id');
var dashboard = document.getElementById("dashboard");
var playmatcam = document.getElementById("playmatcamframe");
var facecam = document.getElementById("facecamframe");
var preview = document.getElementById("preview");
var popouts = document.getElementById("popouts");
var buttons = document.getElementById("buttons");
var cameras = document.getElementById("cameras");
var quality = document.getElementById("quality");
var body = document.body;
var head = document.head;

dashboard.src = "https://cncpowerhour.com:9090/bundles/CNCPH/dashboard/p" + id + ".html?standalone=true";
playmatcam.src = "https://cncpowerhour.com/obs/?room=cncph&view&push=player" + id + "mat&webcam&cleanoutput&od";
facecam.src = "https://cncpowerhour.com/obs/?room=cncph&view&push=player" + id + "face&webcam&cleanoutput&audiodevice=0";
popouts.src = "https://cncpowerhour.com:9090/bundles/CNCPH/dashboard/" + id + "popouts.html?standalone=true";
document.title = "C&C PowerHour - Player " + id + " Dashboard";

if ( id == "1" ) {
	preview.src = "https://cncpowerhour.com/obs/?scene=0&room=cncph&novideo=chris&noaudio=player2face,player2mat,player3face,player3mat,player4face,player4mat,cnc&scale=100&codec=vp8";
} else if ( id == "2" ) {
	preview.src = "https://cncpowerhour.com/obs/?scene=0&room=cncph&novideo=chris&noaudio=player1face,player1mat,player3face,player3mat,player4face,player4mat,cnc&scale=100&codec=vp8";
} else if ( id == "3" ) {
	preview.src = "https://cncpowerhour.com/obs/?scene=0&room=cncph&novideo=chris&noaudio=player2face,player2mat,player1face,player1mat,player4face,player4mat,cnc&scale=100&codec=vp8";
} else if ( id == "4" ) {
	preview.src = "https://cncpowerhour.com/obs/?scene=0&room=cncph&novideo=chris&noaudio=player2face,player2mat,player3face,player3mat,player1face,player1mat,cnc&scale=100&codec=vp8"
} else if ( id == "np" ) {
	document.title = "C&C PowerHour - Chris's Dashboard";
	popouts.src = "https://cncpowerhour.com:9090/bundles/CNCPH/dashboard/npopouts.html?standalone=true";
	dashboard.src = "https://cncpowerhour.com:9090/bundles/CNCPH/dashboard/np.html?standalone=true";
	dashboard.height = "544px";
	dashboard.width = "302px";
	buttons.innerHTML = "";
	cameras.innerHTML = "";
	quality.innerHTML = "";
} else if ( id == "andy" ) {
	dashboard.src = "https://cncpowerhour.com:9090/bundles/CNCPH/dashboard/two.html?standalone=true";
	dashboard.height = "200px";
	playmatcam.src = "https://cncpowerhour.com/obs/?room=cncph&view&push=player1mat&webcam&cleanoutput&od";
	facecam.src = "https://cncpowerhour.com/obs/?room=cncph&view&push=player1face&webcam&cleanoutput&audiodevice=0";
	preview.src = "https://cncpowerhour.com/obs/?scene=0&room=cncph&novideo=chris&noaudio=player2face,player2mat,player3face,player3mat,player4face,player4mat,cnc&scale=100&codec=vp8";
	popouts.src = "https://cncpowerhour.com:9090/bundles/CNCPH/dashboard/2ppopouts.html?standalone=true";
	document.title = "C&C PowerHour - Player 1 Dashboard";
} else if ( id == "chris" ) {
	dashboard.src = "https://cncpowerhour.com:9090/bundles/CNCPH/dashboard/two.html?standalone=true";
	dashboard.height = "200px";
	dashboard.width = "302px";
	buttons.innerHTML = "";
	cameras.innerHTML = "";
	quality.innerHTML = "";
	popouts.src = "https://cncpowerhour.com:9090/bundles/CNCPH/dashboard/npopouts.html?standalone=true";
	document.title = "C&C PowerHour - Chris's Dashboard";
} else if ( id == "clay" ) {
	dashboard.src = "https://cncpowerhour.com:9090/bundles/CNCPH/dashboard/two.html?standalone=true";
	dashboard.height = "200px";
	playmatcam.src = "https://cncpowerhour.com/obs/?room=cncph&view&push=player4mat&webcam&cleanoutput&od";
	facecam.src = "https://cncpowerhour.com/obs/?room=cncph&view&push=player4face&webcam&cleanoutput&audiodevice=0";
	preview.src = "https://cncpowerhour.com/obs/?scene=0&room=cncph&novideo=chris&noaudio=player2face,player2mat,player3face,player3mat,player1face,player1mat,cnc&scale=100&codec=vp8"
	popouts.src = "https://cncpowerhour.com:9090/bundles/CNCPH/dashboard/2ppopouts.html?standalone=true";
	document.title = "C&C PowerHour - Player 4 Dashboard";
} else if ( id == "lu" ) {
	dashboard.src = "https://cncpowerhour.com:9090/bundles/CNCPH/dashboard/two.html?standalone=true";
	dashboard.height = "200px";
	playmatcam.src = "https://cncpowerhour.com/obs/?room=cncph&view&push=player3mat&webcam&cleanoutput&od";
	facecam.src = "https://cncpowerhour.com/obs/?room=cncph&view&push=player3face&webcam&cleanoutput&audiodevice=0";
	preview.src = "https://cncpowerhour.com/obs/?scene=0&room=cncph&novideo=chris&noaudio=player2face,player2mat,player1face,player1mat,player4face,player4mat,cnc&scale=100&codec=vp8";
	popouts.src = "https://cncpowerhour.com:9090/bundles/CNCPH/dashboard/2ppopouts.html?standalone=true";
	document.title = "C&C PowerHour - Player 3 Dashboard";
} else {
	head.innerHTML = "<title>C&C PowerHour - BLAME CHRIS</title><meta name='viewport' content='width=device-width, initial-scale=1'><link rel='icon' type='image/ico' href='imgs/favicon.png'><link href='styles/style.css' rel='stylesheet'>";
	body.innerHTML = "<div id='centered_div'><div><h1>You forgot to select a player, my dude!</h1></div><h3>Sent here by mistake? #blamechris</h3></div>";
}

function twop() {
	dashboard.src = "https://cncpowerhour.com:9090/bundles/CNCPH/dashboard/two.html?standalone=true";
	dashboard.height = "200px";
	popouts.src = "https://cncpowerhour.com:9090/bundles/CNCPH/dashboard/2ppopouts.html?standalone=true";
	document.title = "C&C PowerHour - Two Player Dashboard";
	if ( id == "andy" ) {
	playmatcam.src = "https://cncpowerhour.com/obs/?room=cncph&view&push=player1mat&webcam&cleanoutput&od";
	facecam.src = "https://cncpowerhour.com/obs/?room=cncph&view&push=player1face&webcam&cleanoutput&audiodevice=0";
	preview.src = "https://cncpowerhour.com/obs/?scene=0&room=cncph&novideo=chris&noaudio=player2face,player2mat,player3face,player3mat,player4face,player4mat,cnc&scale=100&codec=vp8";
} else if ( id == "chris" ) {
	dashboard.width = "302px";
	buttons.innerHTML = "";
	cameras.innerHTML = "";
	quality.innerHTML = "";
	popouts.src = "https://cncpowerhour.com:9090/bundles/CNCPH/dashboard/npopouts.html?standalone=true";
	document.title = "C&C PowerHour - Chris's Dashboard";
} else if ( id == "clay" ) {
	playmatcam.src = "https://cncpowerhour.com/obs/?room=cncph&view&push=player4mat&webcam&cleanoutput&od";
	facecam.src = "https://cncpowerhour.com/obs/?room=cncph&view&push=player4face&webcam&cleanoutput&audiodevice=0";
	preview.src = "https://cncpowerhour.com/obs/?scene=0&room=cncph&novideo=chris&noaudio=player2face,player2mat,player3face,player3mat,player1face,player1mat,cnc&scale=100&codec=vp8"
} else if ( id == "lu" ) {
	playmatcam.src = "https://cncpowerhour.com/obs/?room=cncph&view&push=player3mat&webcam&cleanoutput&od";
	facecam.src = "https://cncpowerhour.com/obs/?room=cncph&view&push=player3face&webcam&cleanoutput&audiodevice=0";
	preview.src = "https://cncpowerhour.com/obs/?scene=0&room=cncph&novideo=chris&noaudio=player2face,player2mat,player1face,player1mat,player4face,player4mat,cnc&scale=100&codec=vp8";
} else {
	head.innerHTML = "<title>C&C PowerHour - BLAME CHRIS</title><meta name='viewport' content='width=device-width, initial-scale=1'><link rel='icon' type='image/ico' href='imgs/favicon.png'><link href='styles/style.css' rel='stylesheet'>";
	body.innerHTML = "<div id='centered_div'><div><h1>You forgot to select a player, my dude!</h1></div><h3>Sent here by mistake? #blamechris</h3></div>";
}}