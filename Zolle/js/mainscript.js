$(document).ready(function(){

  $('.text_container .text1').delay(100).fadeIn(1000);
  $('.text_container .text2').delay(1000).fadeIn(1000);

  $('.galleryes .element1').delay(100).fadeIn(1000);
  $('.galleryes .element2').delay(1000).fadeIn(1000);
  $('.galleryes .element3').delay(2000).fadeIn(1000);

  slidering();
  var trigger = [0,0,0];

  $('.element').click(function(event) {
    let key = $(this).attr('data-key');
    let soap = $('.slider_container').find('.soap[data-key=' + key + ']');
    let bg = $(soap).attr('src');
  
    setTimeout(function () {
        $('.wrapper').css('background-image','url(' + bg + ')');
    }, 300)

    $('.slider_container .slider_wrap').removeClass('slider');
    $('.slider_container').find('.slider_wrap[data-key=' + key + ']').addClass('slider');

    if((key == 1)&&(trigger[1] == 0)) {
      trigger[1]=1;
      slidering();
    }
    if((key == 2)&&(trigger[2] == 0)) {
      trigger[2]=1;
      slidering();
    }
  })
});