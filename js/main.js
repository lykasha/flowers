$(document).ready(function () {
  const flowersSwiper = new Swiper('.flowers-slider', {
    // параметры слайдера
    loop: true,
    slidesPerView: 6,

    // подключаем  стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // настройки адаптивной версии
    breakpoints: {
      // если окно браузера >= 320px
      320: {
        slidesPerView: 2,
      },
      // если окно браузера >= 480px
      480: {
        slidesPerView: 3,
      },
      // если окно браузера >= 576px
      576: {
        slidesPerView: 4,
      },
      // если окно браузера >= 640px
      768: {
        slidesPerView: 6,
      }
    }

  });

  const reviesSwiper = new Swiper('.reviews-slider', {
    // параметры слайдера
    loop: true,
    slidesPerView: 1,

    // подключаем  стрелки
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $("#review-1").on('click', function() {

    $.fancybox.open([
      {
        src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
        opts : {
          caption : 'First caption',
          thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
        }
      },
      {
        src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
        opts : {
          caption : 'Second caption',
          thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    }); 

  });

});