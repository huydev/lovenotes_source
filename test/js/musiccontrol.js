document.getElementById('musicbox').onclick = function(e){
	var audio = document.getElementById('music-elem');
	var isPaused = audio.paused;
	if(isPaused){
		audio.play();
		this.style.animationPlayState = "running";
		this.style.webkitAnimationPlayState = "running";
		this.style.mozAnimationPlayState = "running";
		this.style.oAnimationPlayState = "running";
		this.style.msAnimationPlayState = "running";
	}else{
		audio.pause();
		this.style.animationPlayState = "paused";
		this.style.webkitAnimationPlayState = "paused";
		this.style.mozAnimationPlayState = "paused";
		this.style.oAnimationPlayState = "paused";
		this.style.msAnimationPlayState = "paused";
	}
	e.stopPropagation();
};

setTimeout(function(){
	window.scrollTo(0,1);
},0);
document.getElementById('music-elem').play();
document.addEventListener("WeixinJSBridgeReady", function () {
	WeixinJSBridge.invoke('getNetworkType', {}, function (e) {
    	document.getElementById('music-elem').play();
	});
}, false);



document.onclick = function(e){
	var x = e.clientX,
		y = e.clientY;
	var newColor = 'hsl(' + Math.round(Math.random() * 255) + ', 46%, 42%)';

	var cursorDiv = document.createElement('div');
	cursorDiv.id = 'cursorDiv';
	cursorDiv.style.top = y + 'px';
	cursorDiv.style.left = x + 'px';
	cursorDiv.style.backgroundColor = newColor;
	document.querySelector('body').appendChild(cursorDiv);
	setTimeout(function(){
		document.querySelector('body').removeChild(cursorDiv);
	}, 500);

	var clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

	var oDiv = document.createElement('div');
	oDiv.id = 'oDiv';
	oDiv.style.width = oDiv.style.height = (clientWidth > clientHeight ? clientWidth * 2.4 + 'px' : clientHeight * 2.4 + 'px');
	oDiv.style.marginLeft = oDiv.style.marginTop = (clientWidth > clientHeight ? '-' + clientWidth * 1.2 + 'px' : '-' + clientHeight * 1.2 + 'px');
	oDiv.style.top = y + 'px';
	oDiv.style.left = x + 'px';
	oDiv.style.backgroundColor = newColor;
	document.querySelector('body').appendChild(oDiv);
	oDiv.addEventListener('webkitAnimationEnd', function(){
		document.querySelector('body').style.backgroundColor = newColor;
		document.querySelector('body').removeChild(this);
	});
	oDiv.className = 'animation';
}