$(document).ready(function(){

	var number = 12;
	var i = 0;

	function adding(i) {    // добавляет квартиры из json файла
		var mydata = data;
		number+=1;

		let clone = $('.catalog').find('.item[data-order=0]').clone();
		clone.removeClass();
		clone.addClass("item");
		clone.attr('data-order',number);

		let star = mydata[i].star;
		if(star=='full') {
			clone.find('.star').attr('src','img/star.png');
		} else {
			clone.find('.star').attr('src','img/star-empty.png');
		}
		clone.attr('data-room',mydata[i].rooms);
		clone.find('.imgblock img').attr('src',mydata[i].image);
		clone.find('.info .name').html(mydata[i].name);
		clone.find('.info .decoration').html(mydata[i].decoration);
		clone.find('.info .area span').html(mydata[i].area + " м2");
		clone.find('.info .floor span').html(mydata[i].floor);
		clone.find('.price').html("<span>" + mydata[i].price + "</span> руб.");
		clone.find('.status').html(mydata[i].status);

		clone.addClass(mydata[i].status_tag);

		let len = mydata[i].actions.length;
		let t = 0;
		while(t<len) {
			clone.find('.actions').append("<span>" + mydata[i].actions[t] + "</span>");
			t++;
		}

		clone.appendTo(".catalog");
	}

	$(".more").click(function() {  
		z=i;
		while(i<z+20) {
			adding(i);
			i++;
		}
	});


	function compareNumeric(a, b) {
		if (a > b) return 1;
		if (a < b) return -1;
	}
	function compareNumericInverse(a, b) {
		if (a > b) return -1;
		if (a < b) return 1;
	}

	$(".filters .price").click(function() {  // сортирует по ценам


		if($(this).hasClass('active')) {
			$(this).toggleClass('ascending');
		} else {
			$(".filters .place").removeClass('active');
			$(this).addClass('active');
		}

		var prices = [];
		var j = 0;

		$(".item").each(function() {
		    prices[j] = $(this).find('.price span').html();
		    j++;
		});
		var k = 0;
		while(k<j) {
			prices[k] = prices[k].replace(/\s+/g, '');
			prices[k]=parseInt(prices[k],10);
			console.log(prices[k]);
			k++;
		}

		if($(this).hasClass('ascending')) {
			prices.sort(compareNumeric);
		} else {
			prices.sort(compareNumericInverse);
		}

		$(".item").each(function() {
			let thisPrice = $(this).find('.price span').html().replace(/\s+/g, '');
			thisPrice=parseInt(thisPrice,10);
			console.log('price = ' + thisPrice);
			k=0;
			while(k<j) {
				if((thisPrice)==prices[k]) {
					$(this).css('order',k);
					return;
				}
				k++;
			}
		})

	});


	$(".filters .place").click(function() {  // сортирует по комнатам

		if($(this).hasClass('active')) {
			$(this).toggleClass('ascending');
		} else {
			$(".filters .price").removeClass('active');
			$(this).addClass('active');
		}

		var rooms = [];
		var j = 0;

		$(".item").each(function() {
		    rooms[j] = $(this).attr('data-room');
		    console.log(rooms[j]);
		    j++;
		    
		});
		var k = 0;
		while(k<j) {
			k++;
		}

		if($(this).hasClass('ascending')) {
			rooms.sort(compareNumeric);
		} else {
			rooms.sort(compareNumericInverse);
		}

		console.log(rooms);

		$(".item").each(function() {
			let thisRooms = $(this).attr('data-room');
			console.log('thisRooms = ' + thisRooms);
			k=0;
			while(k<j) {
				if((thisRooms)==rooms[k]) {
					$(this).css('order',k);
					return;
				}
				k++;
			}
		})
	});

	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('.upper').fadeIn();
		} else {
			$('.upper').fadeOut();
		}
	});


	$(".upper").click(function(){
       $('html, body').animate({scrollTop:0}, 500);
	})
	

	$(".form .button").click(function(){
	   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	   var address = $('.form input[name="email"').val();
	   if(reg.test(address) == false) {
	      alert('Введите корректный e-mail');
	      return false;
	   } 
	})

	$(".menu-show").click(function(){
		if(!$(this).hasClass('triggered')) {
			$(this).addClass('triggered');
			$(this).parent().children('.header-menu').slideDown();
			$(this).parent().children('.header-menu').css('display','flex');
		}
		else {
			$(this).removeClass('triggered');
			$(this).parent().children('.header-menu').slideUp();
		}

	})





});