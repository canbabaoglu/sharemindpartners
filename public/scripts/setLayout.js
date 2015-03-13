$( document ).ready(function() {
	setHomeSectionMinHeight();
	verticalAlign(".work-example", ".icon-col");
	$(".word-carousel").Morphext();
});

/* --------------------- HELPER FUNCTIONS -------------------- */

//get home section height
function getHomeHeight() {
	var homeHeight = $(window).height() - $(".navbar").height();
	if (homeHeight > 536) homeHeight = 536;
	return homeHeight;
}


// set home section min height
function setHomeSectionMinHeight() {
	
	var homeHeight = getHomeHeight();
	
	homeHeight = homeHeight + "px";
	$(".home-row").css("min-height", homeHeight);
}

function verticalAlign(parentElement, childElement) {
	var parentElementHeight = $(parentElement).height();
	var childElementHeight = $(childElement).height();
	var childPaddingTop = ((parentElementHeight - childElementHeight)/2) + "px";
	$(childElement).css("padding-top", childPaddingTop);
} 