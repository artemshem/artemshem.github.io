$(document).ready(function(){
	var	header = $('.menu').height();
	$('.menu li').each(function() {
		$(this).click(function(){
			var href = $(this).children('a').attr('href');
			var height = $(href).offset().top;
			height=height-header;
	       $('html, body').animate({scrollTop:height}, 1000);
		})
	})
});