$("document").ready(function() {
  $("#modal-about").iziModal({
    icon: "icon-event icon-btn",
    width: "1028px",
    history: !1,
    fullscreen: !0,
    headerColor: "#45a991",
    group: "group1",
    loop: !0,
    transitionIn: "comingIn",
    transitionInOverlay: "fadeIn"
  }),
    $("#neuro,#medical,#mayofas,#sports,#tissue,#bio,#lymp").iziModal({
      icon: "icon-event icon-btn",
      width: "1028px",
      history: !1,
      fullscreen: !0,
      headerColor: "#45a991",
      group: "group1",
      loop: !0,
      transitionIn: "comingIn",
      transitionInOverlay: "fadeIn"
    }),
    $(
      "#therap1,#therap2,#therap3,#therap4,#therap5,#therap6,#therap7,#therap8,#therap9,#therap10,#therap11,#therap12,#can,#ill,#late"
    ).iziModal({
      icon: "icon-event icon-btn",
      width: "1028px",
      history: !1,
      fullscreen: !0,
      headerColor: "#45a991",
      group: "group1",
      loop: !0,
      transitionIn: "comingIn",
      transitionInOverlay: "fadeIn"
    }),
    $("#modal").iziModal({
      title: "About Us",
      subtitle: "Welcome to Natural Earth Healing Center",
      headerColor: "#5b7d6e",
      width: "1000px",
      top: "50px",
      icon: "icon-event icon-btn",
      fullscreen: !0,
      iframe: !0,
      iframeHeight: 800,
      iframeURL: "/about"
    }),
    $(document).on("click", ".trigger-modal", function(e) {
      e.preventDefault(), $("#modal").iziModal("open");
    });
}),
  $('a[href^="#"]').on("click", function(e) {
    var i = $(this.getAttribute("href"));
    i.length &&
      (e.preventDefault(),
      $("html, body")
        .stop()
        .animate({ scrollTop: i.offset().top }, 1e3));
  }),
  $(function() {
    new Swiper(".swiper-container", {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
      loop: !0,
      loopFillGroupWithBlank: !0,
      pagination: { el: ".swiper-pagination", clickable: !0 },
      breakpoints: {
        1024: { slidesPerView: 4, spaceBetween: 30 },
        768: { slidesPerView: 3, spaceBetween: 30, slidesPerGroup: 3 },
        640: { slidesPerView: 2, spaceBetween: 30, slidesPerGroup: 2 },
        480: { slidesPerView: 1, spaceBetween: 30, slidesPerGroup: 1 },
        400: { slidesPerView: 1, spaceBetween: 30, slidesPerGroup: 1 }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }),
  $("document").ready(function() {
    $("#slider-home").vegas({
      slides: [
        { src: "/img/slider111.jpg" },
        { src: "/img/slider222.jpg" },
        { src: "/img/slider333.jpg" }
      ],
      color: "#333",
      delay: 1e4,
      overlay:
        "https://cdnjs.cloudflare.com/ajax/libs/vegas/2.4.0/overlays/07.png",
      animation: "kenburnsRight"
    }),
      $("#slidegen").vegas({
        slides: [
          { src: "/img/slider111.jpg" },
          { src: "/img/slider222.jpg" },
          { src: "/img/slider333.jpg" }
        ],
        color: "#333",
        delay: 1e4,
        overlay:
          "https://cdnjs.cloudflare.com/ajax/libs/vegas/2.4.0/overlays/07.png",
        animation: "kenburnsRight"
      });
  }),
  TweenMax.from(".menuleftlog a img", 1.25, {
    x: -30,
    opacity: "0",
    delay: 1.5
  }),
  TweenMax.from(".menuright", 2, { x: 30, opacity: "0", delay: 1.5 }),
  TweenMax.from(".booknwtop", 2, { x: -30, opacity: "0", delay: 1.5 }),
  $(".btnmenu").on("click", function() {
    var e = new TimelineMax();
    e.staggerFromTo(
      ".nav .navitem",
      1.25,
      { y: "+=50", opacity: "0" },
      { y: "0", opacity: "1" },
      0.1
    ),
      e.staggerFromTo(
        ".contsside a",
        1.25,
        { y: "+=20", opacity: "0" },
        { y: "0", opacity: "1" },
        0.1
      ),
      e.staggerFromTo(
        ".copyside",
        1.25,
        { y: "+=20", opacity: "0" },
        { y: "0", opacity: "1" },
        0.1
      );
  });
var slideanim = new TimelineMax();
slideanim.staggerFromTo(
  "#head .col-md-4",
  1.25,
  { x: -30, opacity: "0" },
  { x: 0, opacity: "1" },
  1,
  0.2
),
  slideanim.staggerFromTo(
    "#head .col-md-8",
    2,
    { x: 30, opacity: "0" },
    { x: 0, opacity: "1" },
    1,
    0.2
  ),
  slideanim.staggerFromTo(
    "#head .logotext h1",
    1.25,
    { x: -30, opacity: "0" },
    { x: 0, opacity: "1" },
    1,
    0.2
  ),
  slideanim.staggerFromTo(
    "#head .menulist",
    2,
    { x: 30, opacity: "0" },
    { x: 0, opacity: "1" },
    1,
    0.2
  ),
  slideanim.staggerFromTo(
    ".slidetxt h1",
    1.25,
    { y: -30, opacity: "0" },
    { y: 0, opacity: "1" },
    1,
    0.2
  ),
  slideanim.staggerFromTo(
    ".slidetxt p",
    2,
    { x: 30, opacity: "0" },
    { x: 0, opacity: "1" },
    1,
    0.2
  ),
  slideanim.staggerFromTo(
    ".slidetxt .btnslide",
    3,
    { x: 30, opacity: "0" },
    { x: 0, opacity: "1" },
    1,
    0.2
  );
$("#spanYear").html(new Date().getFullYear());
