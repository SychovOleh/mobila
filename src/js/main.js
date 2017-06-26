$(document).ready(function() {
  $('.shots__content').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    dots: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    }, {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 479,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  $('.faces__wrap').slick({
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    autoplaySpeed: 10000
  });
});