window.onload = function() {  // слайдер
  slidr.create('slidr-home', {
        breadcrumbs: true,
        controls: 'corner',
        fade: false,
        keyboard: true,
        overflow: true,
        touch: true,
        transition: 'cube'
    }).start();


    let trigger = document.getElementsByClassName('how-we-reach-it__item'); // якоря
    for(let i=0;i<trigger.length;i++) {
      trigger[i].onclick=function(event) {
        event.preventDefault();
         var id  = trigger[i].getAttribute('href'),
             top =document.getElementById(id).offsetTop;
        if(window.pageYOffset<top) {
          let time = setInterval(function() {
            window.scroll(0,window.pageYOffset+100);
            if(window.pageYOffset>=top) {
              clearInterval(time);
            }
          },20);
        }
      };
    }

    let nowWindowScroll = window.pageYOffset;
    let header = document.getElementsByClassName('header-container')[0];
    let footer = document.getElementsByClassName('footer-container')[0];
    let helper = document.getElementsByClassName('helper-block')[0];

    window.onscroll = function() { // показывает/скрывает футер с хедером при скролле
      if(nowWindowScroll<window.pageYOffset) {
        header.classList.remove('header-container--active');
        footer.classList.remove('footer-container--active');
        nowWindowScroll=pageYOffset;
        if(nowWindowScroll+window.innerHeight==document.body.scrollHeight) {
          header.classList.add('header-container--active');
          footer.classList.add('footer-container--active');
        }
      } else {
        header.classList.add('header-container--active');
        footer.classList.add('footer-container--active');
        nowWindowScroll=pageYOffset;
      }
    }

    let scheme = document.getElementsByClassName('scheme-container')[0]; // добавляет скролл к блоку
    if(document.body.clientWidth<=1300) {
      scheme.classList.add('scrolling');
    }

    let table = document.getElementsByClassName('table-container')[0]; // добавляет скролл к блоку
    if(document.body.clientWidth<=1150) {
      table.classList.add('scrolling');
    }



    let scrolling = document.getElementsByClassName('scrolling');

    for(let i=0;i<scrolling.length;i++) {
        let scrollItem = scrolling[i];
        // Обеспечение горизонтальной прокрутки перетаскиванием
        scrollItem.onmousedown = () => {
          let pageX = 0;
          let pageY = 0;
          document.onmousemove = e => {
            if (pageX !== 0 || pageY !==0) {
              scrollItem.scrollLeft = scrollItem.scrollLeft + (pageX - e.pageX);
              scrollItem.scrollTop = scrollItem.scrollTop + (pageY - e.pageY);
            }
            pageX = e.pageX;
            pageY = e.pageY;
          };
          scrollItem.onmouseup = () => {
            document.onmousemove = null;
            scrollItem.onmouseup = null;
          };
          scrollItem.ondragstart = () => {
            return false;
          };
        };
        // Обеспечение горизонтальной прокрутки скроллов колесиком мыши
        scrollItem.addEventListener('wheel', function(event) {
          if (event.deltaMode == event.DOM_DELTA_PIXEL) {
            var modifier = 1;
          } else if (event.deltaMode == event.DOM_DELTA_LINE) {
            var modifier = parseInt(getComputedStyle(this).lineHeight);
          } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
            var modifier = this.clientHeight;
          }
          if (event.deltaY != 0) {
            this.scrollLeft += modifier * event.deltaY;
            this.scrollTop += modifier * event.deltaY;
            event.preventDefault();
          }
        });
      };

  let numbers = document.getElementsByClassName('how-we-reach-it__item');
  let runner = document.getElementsByClassName('how-we-reach-it__indicator-runner')[0];


  for(let i=0; i<numbers.length;i++) { // перемещает "бегунок" в разделе якорей
    numbers[i].onmouseover = function() {
      for(let j=0; j<numbers.length;j++) {
        numbers[j].classList.remove('how-we-reach-it__item--active');
      }
      numbers[i].classList.add('how-we-reach-it__item--active');
      let height = numbers[0].offsetHeight;
      let href = numbers[i].getAttribute('href');
      height = height*(href-1);
      console.log(runner);
      console.log(height);
      // runner.style.top = ;
      runner.style.top = height+'px';
    }
  }

  let graphContainers = document.getElementsByClassName('graph-container');

  if(document.body.clientWidth<=768) {
    for(let i=0;i<graphContainers.length;i++) {
      graphContainers[i].classList.add('scrolling');
    }
  }


  let hamburger = document.getElementsByClassName('hamburger')[0];
  let header__ul = document.getElementsByClassName('header__ul')[0];

  if(document.body.clientWidth<=920) {
    header__ul.classList.add('header__ul--mobile');
  }
  window.onresize  = function() {
    if(document.body.clientWidth<=920) {
      header__ul.classList.add('header__ul--mobile');
    }
    if(document.body.clientWidth>920) {
      header__ul.classList.remove('header__ul--mobile');
    }

    if(document.body.clientWidth<=1300) {
      scheme.classList.add('scrolling');
    }
    if(document.body.clientWidth>1300) {
      scheme.classList.remove('scrolling');
    }

    if(document.body.clientWidth<=1150) {
      table.classList.add('scrolling');
    }
    if(document.body.clientWidth>1150) {
      table.classList.remove('scrolling');
    }

    if(document.body.clientWidth<=768) {
      for(let i=0;i<graphContainers.length;i++) {
        graphContainers[i].classList.add('scrolling');
      }
    }
    if(document.body.clientWidth>768) {
      for(let i=0;i<graphContainers.length;i++) {
        graphContainers[i].classList.remove('scrolling');
      }
    }

  }

  hamburger.onclick = function() {
    header__ul.classList.toggle('header__ul--mobile-active');
  }





}
