window.onload=function(){
	var height = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
	document.getElementById("stickymenu").style.height=height+"px"
	
}

function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}