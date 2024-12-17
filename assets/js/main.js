/* ----------------------------------

Name: main.js
Author: Alissio
Website: https://www.miloslider.com
Exclusively available here: https://themeforest.net/user/alissio

------------------------------------- */





/*====================================================


	Table of Contents

		01. Gallery Slider

			+ Fade Carousel
			+ Thumb Slider
      + Control Fade and Thumb Sliders



	
====================================================*/



/*======================

	01. Gallery Slider 

========================*/


/* Fade Carousel 
-------------------------*/
var slider = new Swiper ('.gallery-slider', {
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    speed: 4000,
    effect: "fade",
    loopedSlides: 3, 
    breakpoints: {
      // when window width is >= 768px
      768: {
        loopedSlides: 2, 
      },
      // when window width is >= 992px
      992: {    
        loopedSlides: 2, 
      },
      // when window width is >= 1199px
      1199: {    
        loopedSlides: 2, 
      },
      // when window width is >= 1280px
      1280: {
        loopedSlides: 3, 
      }
    }
});


/* Thumb Slider
-------------------------*/
var thumbs = new Swiper ('.gallery-thumbs', {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false
    },
    slideToClickedSlide: true,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 3,
      slideShadows: true
    },
    onmouseover: {
      autoplay: false
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 2.1,
      },
      // when window width is >= 992px
      992: {    
        slidesPerView: 2.03,
      },
      // when window width is >= 1199px
      1199: {    
        slidesPerView: 2,
      },
      // when window width is >= 1280px
      1280: {
        slidesPerView: 3,
      }
    }
});

// Stop on Hover
$('.gallery-thumbs .swiper-slide').hover(function(){
  thumbs.autoplay.stop();
}, function(){
  thumbs.autoplay.start();
});


/* Control Fade and Thumb Sliders
-------------------------*/
slider.controller.control = thumbs;
thumbs.controller.control = slider;


