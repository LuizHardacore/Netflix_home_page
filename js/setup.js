$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    slideBy:5,
    mouseDrag:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$(function () {
    $(document).scroll(function () {
      var $nav = $("#header");
      $nav.toggleClass('scrolled', $(this).scrollTop() > 0);
    });
  }); 
     

