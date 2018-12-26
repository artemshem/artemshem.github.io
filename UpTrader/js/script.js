$(document).ready(function(){

	if($(window).width()>767) {  // пк, растягивает табулятор по первому табу
		$('.tabs-content').height($(".tab .tab-content").height() + 140);
		$('.tabs').find('.tab[data-key=' + 1 + ']').addClass('active');
	}

	$(".tab").click(function() { // пк, растягивает табулятор по клику на любой таб
		if($(window).width()>767) {
			var height = $(this).find('.tab-content').height();
			$(this).parents('.tabs-content').height(height+128);
		}
	});


	
	$(".tab-title").click(function() { // пк, переключает табы
		if($(window).width()>767) {
			$('.tab').removeClass('active');
			$(this).parents('.tab').addClass('active');
		}
		if($(window).width()<768) {
			$(this).parents('.tab').toggleClass('active');
		}
	});


	$('.circle').each(function() { // все, скроллит вниз и дает актив этому табу
		$(this).click(function(){
			let href = $(this).attr('href');
			let height = $(href).offset().top;
	       $('html, body').animate({scrollTop:height}, 1000);
	       $('.tab').removeClass("active");
	       $(href).addClass("active");
		})
	});



});