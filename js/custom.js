(function($){
	$(document).ready(function(){
		
		
		
		
			// mixitup ready
		
		
		var mixer = mixitup('.container');
		
		// four animated
		
		
		
		
		// animated progress bar
		// ''''''''''''''''''
		
		$('svg.radial-progress').each(function( index, value ) { 
  $(this).find($('circle.complete')).removeAttr( 'style' );
});
		
		$(window).scroll(function(){
  $('svg.radial-progress').each(function( index, value ) { 
    // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
    if ( 
        $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
        $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
    ) {
        // Get percentage of progress
        percent = $(value).data('percentage');
        // Get radius of the svg's circle.complete
        radius = $(this).find($('circle.complete')).attr('r');
        // Get circumference (2pr)
        circumference = 2 * Math.PI * radius;
        // Get stroke-dashoffset value based on the percentage of the circumference
        strokeDashOffset = circumference - ((percent * circumference) / 100);
        // Transition progress for 1.25 seconds
        $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
    }
  });
}).trigger('scroll')
		
		
		
		
		// sticky
		// down nav
		// ..........

		
$(".js_service").waypoint(function(direction){
	
	if(direction== "down"){
		
		$("nav").addClass("sticky");
		
	}
	else{
		
		
		$("nav").removeClass("sticky");
	}
	
});
		// finished sticky
		
		
	
		
		
		
	});
	
})(jQuery)
