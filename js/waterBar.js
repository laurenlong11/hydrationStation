var name=prompt("What is your name?");

function nameFunction(){
	document.getElementById('name').innerHTML=name;
}

var x=0
var y=12.5

function move() {
	document.getElementById("myBar").style.width=(x+=y) + "%";
	if (document.getElementById("myBar").style.width=="12.5%") {
		document.getElementById("gifs").innerHTML="<img src=imgs/encouragement.gif>"
	}
	if (document.getElementById("myBar").style.width=="25%") {
		document.getElementById("gifs").innerHTML="<img src=imgs/jvn.gif>"
	}
	if (document.getElementById("myBar").style.width=="37.5%") {
		document.getElementById("gifs").innerHTML="<img src=imgs/yesQueen.gif>"
	}
	if (document.getElementById("myBar").style.width=="50%") {
		document.getElementById("gifs").innerHTML="<img src=imgs/soGood.gif>"
	}
	if (document.getElementById("myBar").style.width=="62.5%") {
		document.getElementById("gifs").innerHTML="<img src=imgs/gorgeous.gif>"
	}
	if (document.getElementById("myBar").style.width=="75%") {
		document.getElementById("gifs").innerHTML="<img src=imgs/warrior.gif>"
	}
	if (document.getElementById("myBar").style.width=="87.5%") {
		document.getElementById("gifs").innerHTML="<img src=imgs/snaps.gif>"
	}
	if (document.getElementById("myBar").style.width==="100%") {
		document.getElementById("gifs").innerHTML="<img src=imgs/yay.gif>"
	}
	if (document.getElementById("myBar").style.width=="112.5%") {
		document.getElementById("gifs").innerHTML="<img src=imgs/nextLevel.gif>"
	}
}