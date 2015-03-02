$( document ).ready(function() {

	var i              = 0;
	var j              = 0;
	var noSlides       = $('.word-carousel').length;
	var transitionTime = 1000;
	var slideTime      = 4000;
	var repeat         = 250;

	function runSlides() {
		setTimeout(function() {
			nextSlide(i, transitionTime);
			j++;
			i++;
			if (i == noSlides) i=0;
			if (j < repeat) runSlides();
		}, slideTime);
	}

	runSlides();
});

function nextSlide(index, duration) {
	var noSlides = $('.word-carousel').length;
	var currentSlide = $('.word-carousel').eq(index);

	currentSlide.fadeOut(duration);

	setTimeout(function() {
		if (index == noSlides - 1) $('.word-carousel').eq(0).fadeIn(duration);

		currentSlide.next().fadeIn(duration);
	}, duration);
}