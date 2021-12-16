

function playertoggle(evt, players) {
	var activeClass = evt.target.classList.contains("active")
	if (!activeClass) {
		var i, playercontent, playertoggles;
		playercontent = document.getElementsByClassName("playertog");
		for (i =0; i <playercontent.length; i++) {
			playercontent[i].style.display = "none";
		}
		playertoggles = document.getElementsByClassName("playertoggles");
		for (i = 0; i < playertoggles.length; i++) {
			playertoggles[i].className = playertoggles[i].className.replace(" active", "");
		}
		document.getElementById(players).style.display = "block";
		evt.currentTarget.className += " active";
	} else {
		document.getElementById(players).style.display = "none";
		evt.target.classList.remove("active");
	}
}

// Allows player to hide facecam window but source does not go away
$(document).ready(function () {
  $("#facetoggle").click(function () {
    $(".faceframe").toggle();
  });
});

function poptoggle(evt, popouts) {
  var activeClass = evt.target.classList.contains("active")
  if (!activeClass) {
    var i, popcontent, poptoggles;
    popcontent = document.getElementsByClassName("poptog");
    for (i = 0; i < popcontent.length; i++) {
      popcontent[i].style.display = "none";
    }
    poptoggles = document.getElementsByClassName("poptoggles");
    for (i = 0; i < poptoggles.length; i++) {
      poptoggles[i].classname = poptoggles[i].className.replace(" active", "");
    }
    document.getElementById(popouts).style.display = "block";
    evt.currentTarget.className += " active";
  } else {
    document.getElementById(popouts).style.display = "none";
    evt.target.classList.remove("active");
  }
}


function toggleMic() {
	var mic = document.getElementById('buttonMic');
	var iframe = document.getElementById('playmatcamframe');
	mic.classList.toggle('micon');
	mic.classList.toggle('green');
	mic.classList.toggle('micoff');
    mic.classList.toggle('red');
	iframe.contentWindow.postMessage({"mic":"toggle"}, '*');
}
function toggleCam1() {
	var cam = document.getElementById('buttonCam1');
	var iframe = document.getElementById('playmatcamframe');
	cam.classList.toggle('camon');
	cam.classList.toggle('green');
	cam.classList.toggle('camoff');
	cam.classList.toggle('red');
	iframe.contentWindow.postMessage({"camera":"toggle"}, '*');
}
function toggleCam2() {
	var cam = document.getElementById('buttonCam2');
	var iframe = document.getElementById('facecamframe');
	cam.classList.toggle('camon');
	cam.classList.toggle('green');
	cam.classList.toggle('camoff');
	cam.classList.toggle('red');
	iframe.contentWindow.postMessage({"camera":"toggle"}, '*');
}
function toggleMute() {
	var cam = document.getElementById('buttonMute');
	var iframe = document.getElementById('preview');
	cam.classList.toggle('muteon');
	cam.classList.toggle('green');
	cam.classList.toggle('muteoff');
	cam.classList.toggle('red');
	iframe.contentWindow.postMessage({"mute":"toggle"}, '*');
}

function pop (){
	const sidebar = document.getElementById('sidebar');
	const obs = document.getElementById('obs');
}


var isFirefox = String(typeof InstallTrigger !== 'undefined');
var isChrome = String(!!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime));
var codec;

if (isFirefox == "true" ) {
	codec = "vp8";
} else if (isChrome == "true" ) {
	codec = "av1";
} else {
	codec = "vp8";
};

// toggles between chat and cameras
window.show = function(elementId) { 
    var elements = document.querySelectorAll('#cameras, #chat'); 
    for (var i = 0; i < elements.length; i++)
        elements[i].className = "hidden";
    document.getElementById(elementId).className = "";
}

// Refreshes iframes to change sources
function refreshIframe1() {
    var ifr = document.getElementsByName('playmatcamframe')[0];
    ifr.src = ifr.src;
}
function refreshIframe2() {
    var ifr = document.getElementsByName('facecamframe')[0];
    ifr.src = ifr.src;
}

// Refreshes iframe with new bitrates
function highq() {
	var high = document.getElementById('highq');
	var med = document.getElementById('medq');
	var low = document.getElementById('lowq');
    var ifr = document.getElementById('preview');
	high.classList.remove('red');
	high.classList.add('green');
	med.classList.remove('green');
	med.classList.add('red');
	low.classList.remove('green');
	low.classList.add('red');
	var url = new URL(ifr.src);
	var par = url.searchParams;
	par.set('vb', '6000');
	par.set('codec', codec);
	url.search = par.toString();
	var new_url = url.toString();
    ifr.src = new_url;
	console.log("codec: " + new_url);
}
function medq() {
	var high = document.getElementById('highq');
	var med = document.getElementById('medq');
	var low = document.getElementById('lowq');
    var ifr = document.getElementById('preview');
	high.classList.remove('green');
	high.classList.add('red');
	med.classList.remove('red');
	med.classList.add('green');
	low.classList.remove('green');
	low.classList.add('red');
	var url = new URL(ifr.src);
	var par = url.searchParams;
	par.set('vb', '2000');
	par.set('codec', 'vp8');
	url.search = par.toString();
	var new_url = url.toString();
    ifr.src = new_url;
	console.log("codec: " + new_url);
}
function lowq() {
	var high = document.getElementById('highq');
	var med = document.getElementById('medq');
	var low = document.getElementById('lowq');
    var ifr = document.getElementById('preview');
	high.classList.remove('green');
	high.classList.add('red');
	med.classList.remove('green');
	med.classList.add('red');
	low.classList.remove('red');
	low.classList.add('green');
	var url = new URL(ifr.src);
	var par = url.searchParams;
	par.set('vb', '150');
	par.set('codec', 'vp9');
	url.search = par.toString();
	var new_url = url.toString();
    ifr.src = new_url;
	console.log("codec: " + new_url);
}