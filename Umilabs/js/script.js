$(document).ready(function(){

  let submit = $('.submit');

  $(".fill-form").mouseover(function(){ // увеличиваем кнопку хедера при наведении
      $(this).children('.plus').css('width','236px');
   });
   $(".fill-form").mouseout(function(){ // уменьшаем ее после
       $(this).children('.plus').css('width','54px');
    });
  $(".fill-form").click(function() {  // скроллим к анкете при клике
    let target = $('.block5');
		let height = $(target).offset().top;
    $('html, body').animate({scrollTop:height}, 1500);
  });
  $(".upper").click(function() {  // поднимаемся вверх по клику на кнопку "верх"
    $('html, body').animate({scrollTop:0}, 1500);
  });

  window.onscroll = function() { // динамически убирает/добавляет "вверх" при скролле
    console.log($(window).scrollTop());
    if($(window).scrollTop() > 100) {
      $(".upper").css('display','block');
    }
    if($(window).scrollTop() < 100) {
      $(".upper").css('display','none');
    }
  };


  let initialCircle = setTimeout(function() { // этот код добавляет анимацию в блок лозунгов
    let i=-1;
    let arr = document.getElementsByClassName('layout');
    $('.layout').css('transition','1s');
    let circle = setInterval(function() {
      if(i>-1) {
        arr[i].classList.remove('active');
      }
      i++;
      if(i>arr.length-1) {
        i=0;
      }
      let temp = arr[i];
      temp.classList.add('active');
    },2000);
  },1000);



  $('.form').submit(function(e) { // валидация формы
    e.preventDefault();
    let name = ValidName();
    let email = ValidMail();
    let number = ValidPhone();
    if(email & number & name) {
      $.ajax({
        type: 'POST',
        url: 'js/mail.php',
        data: $(this).serialize
      }).done(function() {
        alert('Спасибо за заявку! Скоро мы с вами свяжемся!');
      });
      return false;
    }
  });

  function ValidName() { // валидация имени
      let re = /^[А-Я][а-я]+\s[А-Я][а-я]+$/i;
      let myName = document.getElementById("name_input").value;
      let valid = re.test(myName);
      if(!valid) {
        $(".input-container-1 .error").css('display','block');
      } else {
        $(".input-container-1 .error").css('display','none');
      }
      return valid;
  };

  function ValidMail() { // валидация email
      let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
      let myMail = document.getElementById("email_input").value;
      let valid = re.test(myMail);
      if(!valid) {
        $(".input-container-2 .error").css('display','block');
      } else {
        $(".input-container-2 .error").css('display','none');
      }
      return valid;
  };

  function ValidPhone() { // валидация номера телефона
      let re = /^\d[\d\(\)\ -]{4,14}\d$/;
      let myPhone = document.getElementById('number_input').value;
      let valid = re.test(myPhone);
      if(!valid) {
        $(".input-container-3 .error").css('display','block');
      } else {
        $(".input-container-3 .error").css('display','none');
      }
      return valid;
  }
});
