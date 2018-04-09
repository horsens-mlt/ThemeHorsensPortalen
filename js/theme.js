(function ($) {

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
	  target: '#mainNav',
	  offset: 54
	});

	// Collapse the navbar when page is scrolled
	$(window).scroll(function() {
	  if ($("#mainNav").offset().top > 300) {
	    $("#mainNav").addClass("navbar-shrink");
	  } else {
	    $("#mainNav").removeClass("navbar-shrink");
	  }
	});

}(jQuery));