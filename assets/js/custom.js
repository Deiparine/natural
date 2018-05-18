$('document').ready(function(){ 

  $(".modais").iziModal({
    icon: 'icon-event icon-btn',
    width: "1028px",
    iframeHeight: 500,
    history: false,
    iframe : true,
    fullscreen: true,
    headerColor: '#f9c416',
    group: 'group1',
    loop: true,
    transitionIn: 'comingIn',
    transitionInOverlay: 'fadeIn'
  });    
    
    
  var swiper = new Swiper('.slidertestimons', {
      slidesPerView: 2,
      spaceBetween: 50,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
  });


  var swiper = new Swiper('.servicesslide', {
      slidesPerView: 4,
      spaceBetween: 20, 
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });


  var swiper = new Swiper('.slider2', {
      spaceBetween: 30,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });



  


});



$(function(){ 

    
    
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        768: {
          slidesPerView:3,
          spaceBetween: 30,
          slidesPerGroup: 3,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 2,
        },
        480: {
          slidesPerView:1,
          spaceBetween: 30,
          slidesPerGroup: 1,
        }
      }, 
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }

    });
    
    
}) 



$('document').ready(function(){   

    $('#slider-home').vegas({
        slides:[
          { src: "/img/slider1.jpg" },
          { src: "/img/slider1.jpg" }
        ],
        color: "#333",
        delay: 10000,
        overlay: '/img/overlays/02.png',
        animation: 'random'
    }); 
})



TweenMax.from('.menuleftlog a img', 1.25, {x:-30, opacity: "0", delay: 1.5})
TweenMax.from('.menuright', 2, {x:30, opacity: "0", delay: 1.5})
TweenMax.from('.booknwtop', 2, {x:-30, opacity: "0", delay: 1.5})


$(".btnmenu").on('click', function(){
    var slidernav = new TimelineMax();
    slidernav.staggerFromTo('.nav .navitem', 1.25, {y:"+=50", opacity: "0"}, {y:"0", opacity: "1"}, 0.1);   
    slidernav.staggerFromTo('.contsside a', 1.25, {y:"+=20", opacity: "0"}, {y:"0", opacity: "1"}, 0.1);  
    slidernav.staggerFromTo('.copyside', 1.25, {y:"+=20", opacity: "0"}, {y:"0", opacity: "1"}, 0.1);  
}) 


var slideanim = new TimelineMax();
        slideanim.staggerFromTo('#head .col-md-4', 1.25, {x:-30, opacity: "0"}, {x:0, opacity: "1"},1, 0.2);
        slideanim.staggerFromTo('#head .col-md-8', 2, {x:+30, opacity: "0"}, {x:0, opacity: "1"},1, 0.2); 

        slideanim.staggerFromTo('#head .logotext h1', 1.25, {x:-30, opacity: "0"}, {x:0, opacity: "1"},1, 0.2);
        slideanim.staggerFromTo('#head .menulist', 2, {x:+30, opacity: "0"}, {x:0, opacity: "1"},1, 0.2); 

        slideanim.staggerFromTo('.slidetxt h1', 1.25, {y:-30, opacity: "0"}, {y:0, opacity: "1"},1, 0.2);
        slideanim.staggerFromTo('.slidetxt p', 2, {x:+30, opacity: "0"}, {x:0, opacity: "1"},1, 0.2);
        slideanim.staggerFromTo('.slidetxt .btnslide', 3, {x:+30, opacity: "0"}, {x:0, opacity: "1"},1, 0.2);




 


    var $slider = $('.slider');
    var $slickTrack = $('.slick-track');
    var $slickCurrent = $('.slick-current');
    var slideDuration = 900;

    //RESET ANIMATIONS
    // On init slide change
    $slider.on('init', function(slick){
      TweenMax.to($('.slick-track'), 0.9, {
        marginLeft: 0
      });
      TweenMax.to($('.slick-active'), 0.9, {
        x: 0,
        zIndex: 2
      });
    });
    // On before slide change
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
      TweenMax.to($('.slick-track'), 0.9, {
        marginLeft: 0
      });
      TweenMax.to($('.slick-active'), 0.9, {
        x: 0
      });
    });

    // On after slide change
    $slider.on('afterChange', function(event, slick, currentSlide){
      TweenMax.to($('.slick-track'), 0.9, {
        marginLeft: 0
      });
      $('.slick-slide').css('z-index','1');
      TweenMax.to($('.slick-active'), 0.9, {
        x: 0,
        zIndex: 2
      });
    });

    //SLICK INIT
    $slider.slick({
      speed: slideDuration,
      dots: true,
      waitForAnimate: true,
      useTransform: true,
      cssEase: 'cubic-bezier(0.455, 0.030, 0.130, 1.000)'
    })

    //PREV
    $('.slick-prev').on('mouseenter', function(){
                    TweenMax.to($('.slick-track'), 0.6, {
                      marginLeft: "180px",
                      ease: Quad.easeOut
                    });
                    TweenMax.to($('.slick-current'), 0.6, {
                      x: -100,
                      ease: Quad.easeOut
                    });
                });

    $('.slick-prev').on('mouseleave', function(){
                    TweenMax.to($('.slick-track'), 0.4, {
                      marginLeft: 0,
                      ease: Sine.easeInOut
                    });
                    TweenMax.to($('.slick-current'), 0.4, {
                      x: 0,
                      ease: Sine.easeInOut
                    });
                });
    //NEXT
    $('.slick-next').on('mouseenter', function(){
      
                    TweenMax.to($('.slick-track'), 0.6, {
                      marginLeft: "-180px",
                      ease: Quad.easeOut
                    });
                    TweenMax.to($('.slick-current'), 0.6, {
                      x: 100,
                      ease: Quad.easeOut
                    });
                });
    $('.slick-next').on('mouseleave', function(){
                    TweenMax.to($('.slick-track'), 0.4, {
                      marginLeft: 0,
                      ease: Quad.easeInOut
                    });
                    TweenMax.to($('.slick-current'), 0.4, {
                      x: 0,
                      ease: Quad.easeInOut
                    });
                }); 


