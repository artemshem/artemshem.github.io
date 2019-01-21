$(document).ready(function(){

  $('.money-tape div').click(function(){
    $('.money-tape div').removeClass('active');
    $(this).addClass('active');
  });

  $('.password').focusout(function(){
    let pass = $('.password').val().length;
    if((pass > 0)&(pass < 4)) {
      $('.password-error').addClass('active');
      $('.password').addClass('errored');
    } else {
      setTimeout(function() { $(".password-error").removeClass('active'); }, 500);
      setTimeout(function() { $(".password").removeClass('errored'); }, 500);
    }
  });

  $('form').submit(function(e) {
      let user = 'user';
      let login = $('.email').val();
      let check = $('.checkbox').prop("checked");
      if(user==login) {
        $('.submit-error').text('Учётная запись с указанным e-mail уже существует');
        $('.submit-error').addClass('active');
        setTimeout(function() { $('.submit-error').removeClass('active'); }, 3000);
      } else if(!$("form .money-tape div").hasClass("active")) {
        $('.submit-error').text('Необходимо выбрать валюту');
        $('.submit-error').addClass('active');
        setTimeout(function() { $('.submit-error').removeClass('active'); }, 3000);
      } else if (!check) {
        $('.submit-error').text('Необходимо подтвердить ознакомление с соглашением');
        $('.submit-error').addClass('active');
        setTimeout(function() { $('.submit-error').removeClass('active'); }, 3000);
      } else {
        var $form = $(this);
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize()
        }).done(function() {

        }).fail(function() {

        });
        $('.submit-success').text('Вы успешно отправили форму');
        $('.submit-success').addClass('active');
        setTimeout(function() { $('.submit-success').removeClass('active'); }, 3000);
      }
      e.preventDefault();
    });



});
