$('document').ready(function(){ 

  $("#modal-about").iziModal({
    icon: 'icon-event icon-btn',
    width: "1028px", 
    history: false,
    fullscreen: true,
    headerColor: '#45a991',
    group: 'group1',
    loop: true,
    transitionIn: 'comingIn',
    transitionInOverlay: 'fadeIn'
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
          { src: "/img/slider2.jpg" },
          { src: "/img/slider3.jpg" }
        ],
        color: "#333",
        delay: 10000, 
        animation: 'random'
    }); 

    $('#slidegen').vegas({
        slides:[
          { src: "/img/genslide1.jpg" },
          { src: "/img/genslide2.jpg" },
          { src: "/img/genslide3.jpg" }
        ],
        color: "#333",
        delay: 10000, 
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

