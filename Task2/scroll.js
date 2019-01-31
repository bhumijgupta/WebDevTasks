scroll = document.querySelector('.color');
function updateScroll(){
	h = document.body.scrollTop;
	total = document.documentElement.clientHeight-window.innerHeight;
	scroll.style.width = ((h/total)*100).toString() + "%";
	console.log('scrolling');
}
window.onscroll = updateScroll;