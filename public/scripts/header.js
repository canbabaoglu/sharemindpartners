// SET ACTIVE NAV WHEN PAGE LOADS
$( document ).ready(function() {
	setActiveNavByWindowHeight();
}); 

// NAVIGATE TO CORRESPONDING SECTION WHEN USER CLICKS ON NAV ITEM
$(".nav li").click(function() {

	//set values
	var currentNavIndex = getcurrentNavIndex();
	var newNavIndex = $(this).index();
	var difference = Math.abs(currentNavIndex - newNavIndex);
	var startHeights = getSectionStartHeights();
	var animationSpeed = 500 * difference;

	//adjust active nav item
	$(".nav li").removeClass("active");
	$(this).addClass("active");

	//scroll to right area on the page 
	$(window.opera ? 'html' : 'html, body').animate({
		scrollTop: startHeights[newNavIndex]
	},animationSpeed);
});


// AUTO ADJUST ACTIVE NAV WHEN USER SCROLLS
$(window).scroll(function() {		
	setActiveNavByWindowHeight();
});

// NAVIGATE TO NEXT SECTION FROM CTAs

$('.btn-link').click(function() {
	var startHeights = getSectionStartHeights();
	var currentIndex = $(this).closest(".section-row").index();	

	$(window.opera ? 'html' : 'html, body').animate({
		scrollTop: startHeights[currentIndex+1]
	},1000);
});


/* --------------------- HELPER FUNCTIONS -------------------- */

function adjustActiveNav() {
	$(".header-nav li").removeClass("active");
	$(this).addClass("active");
}

function getcurrentNavIndex() {
	return $(".header-nav .active").index();
}

function getSectionStartHeights() {

	var headerHeight = $(".navbar").height();
	var conventionStartHeight = headerHeight + $(".home-row").height();
	var differentiationStartHeight = conventionStartHeight + $(".myths-row").height();
	var servicesStartHeight = differentiationStartHeight +$(".differentiation-row").height();
	var contactStartHeight = servicesStartHeight + $(".services-row").height();

	var startHeights = [0, conventionStartHeight, differentiationStartHeight, servicesStartHeight, contactStartHeight];

	return startHeights;
}

function setActiveNavByWindowHeight() {
	var startHeights = getSectionStartHeights();
	
	// remove all active navs
	$(".nav li").removeClass("active");

	// add the correct one
	if ( $(window).scrollTop() < startHeights[1] * 3 / 4 ) {
		$(".nav li").eq(0).addClass('active');
	} else if ( $(window).scrollTop() < startHeights[2] * 4 / 5 ) {
		$(".nav li").eq(1).addClass('active');
	} else if ( $(window).scrollTop() < startHeights[3] * 5 / 6 ) {
		$(".nav li").eq(2).addClass('active'); 
	} else if ( $(window).scrollTop() < startHeights[4] * 6 / 7 ) {
		$(".nav li").eq(3).addClass('active'); 
	} else {
		$(".nav li").eq(4).addClass('active'); 
	}
}
