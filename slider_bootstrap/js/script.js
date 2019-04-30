$(document).ready(function(){

    $('.carousel').carousel({
        interval: false
    });

    function show() {
    	$('.hello').slideUp(1000);
    	$('.carousel').removeClass('hidden');
    }

    $('.hello .start').click(function() {
    	setTimeout(show, 1000);

    	// $('.hello').removeClass('showed');
    });


});
