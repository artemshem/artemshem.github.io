var i = 1;

function fn() {
	var elem = document.getElementById('span');
	elem.innerHTML=parseInt(elem.innerHTML) + 1;
	// if(elem.innerHTML%10==0) {
	// 	alert('bang');
	// }
}

function start() {
	setInterval(fn,100);
}

function stop() {
	clearInterval(fn,100);
}