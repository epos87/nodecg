var player = String(new URLSearchParams(window.location.search).get('player'));

if ( player == "1" ) {
	redirect('1');
} else if ( player == "2" ) {
	redirect('2');
} else if ( player == "3" ) {
	redirect('3');
} else if ( player == "4" ) {
	redirect('4');
} else if ( player == "np" ) {
	redirect('np');
} else if ( player == "andy" ) {
	redirect('andy');
} else if ( player == "chris" ) {
	redirect('chris');
} else if ( player == "lu" ) {
	redirect('lu');
} else if ( player == "clay" ) {
	redirect('clay');
} else if ( player == "null" ) {
	document.getElementById("noplayer").innerHTML = "<h2>you forgot the player number, dummy!<h2>";
} else if ( player == "NaN" ) {
	document.getElementById("noplayer").innerHTML = "<h2>you forgot the player number, dummy!<h2>";
} else {
	document.getElementById("noplayer").innerHTML = "<h2>you put player " + player + ", dummy!<h2>"
}

function redirect (player) {
	window.location.href = "https://cncpowerhour.com/stream/dashboard?id=" + player;
}