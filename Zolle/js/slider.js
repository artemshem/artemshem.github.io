function slidering(){

	let elWrap = $('.slider'),
		el =  elWrap.find('.slide'),
		indexImg = 1,
		indexMax = el.length;
	
	function change () {
		if($(elWrap).hasClass('slider')) {
			el.fadeOut(500);
			el.filter(':nth-child('+indexImg+')').fadeIn(500);
		}
		else {
			return;
			console.log('return');
		}
	}	
	function extrachange () {
		el.fadeOut(0);
		el.filter(':nth-child('+indexImg+')').fadeIn(0);
	}	
	$('span.next').click(function() {
		indexImg++;
		if(indexImg > indexMax) {
			indexImg = 1;
		}
		change ();
	});
	$('span.prev').click(function() {
		indexImg--;
		if(indexImg < 1) {
			indexImg = indexMax;
		}
		change ();
	});	
	$('.element').click(function() {
		indexImg = 1;
		extrachange ();
	});
};