window.onscroll = function (e) {  
	
	console.log(window.scrollY);
	if (window.scrollY > 300){
		document.getElementById("header-fixe").style.boxShadow = "0 0 20px rgb(0, 0, 0, 0.3)";
		document.getElementById("header-fixe").style.position = "fixed";
	}
	else{
		document.getElementById("header-fixe").style.boxShadow = "none";
		document.getElementById("header-fixe").style.position = "inherit";
	}
	for (opacity = 0; opacity < 1.1; opacity = opacity + 0.1) 
{           
    setTimeout(function(){document.getElementById('header-fixe').style.opacity = opacity;},100)                       
}  
};
document.getElementById('play-vid').onclick = function () {
	document.getElementById('videos-1').play();
	document.getElementById('play-vid').style.display = 'none'

};
document.getElementById('play-vid-2').onclick = function () {
	document.getElementById('videos-2').play();
	document.getElementById('play-vid-2').style.display = 'none'
};


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) { slideIndex = 1 }
	if (n < 1) { slideIndex = slides.length }
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}
setInterval(function(){
	plusSlides(1)
}, 5000);


function inscrire() {
document.getElementById("pop").style.display = "block";
document.getElementById("pop-1").style.display = "none";
}

function inscrire1() {
document.getElementById("pop-inscrire-1").style.display = "block";
document.getElementById("inscrire-1").style.display = "none";
document.getElementById("contenu-popup").style.padding = "5px 60px";
}

