
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
