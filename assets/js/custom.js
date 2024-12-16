var slider = new Swiper ('.gallery-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    speed: 4000,
    effect: "fade",
    loopedSlides: 3, 
});

var thumbs = new Swiper ('.gallery-thumbs', {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    speed: 800,
    slideToClickedSlide: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickable: true,
    // },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 2.1,
      },
      // when window width is >= 1024px
      992: {    
        slidesPerView: 2.03,
      },
      // when window width is >= 1024px
      1199: {    
        slidesPerView: 2.1,
      },
      // when window width is >= 1280px
      1280: {
        slidesPerView: 3,
      }
    }
  //   on: { 
  //     slideChangeTransitionStart: function () {
  //       console.log('slideChange');
  //       AOS.init();
  //     },
      
  //     slideChangeTransitionEnd: function () {
  //       console.log('slideChange 2');
  //   },
  // }
});

//slider.params.control = thumbs;
//thumbs.params.control = slider;

slider.controller.control = thumbs;
thumbs.controller.control = slider;


