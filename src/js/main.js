function animateNow(animationTarget) {
  function isElementInViewport(elem) {
    let $elem = $(elem);

    // Get the scroll position of the page.
    let scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    let viewportTop = $(scrollElem).scrollTop();
    let viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    let elemTop = Math.round($elem.offset().top);
    let elemBottom = elemTop + $elem.height();
    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
  }
  // Check if it's time to start the animation.
  function checkAnimation() {
    let $elem = $(animationTarget);

    if ($elem.hasClass('start-animate')) return;
    if (isElementInViewport($elem)) {
      $elem.addClass('start-animate');
    }
  }
  $(window).scroll(function() {
    checkAnimation();
  });
}

$(function() {
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
    autoplaySpeed: 1500
  });

  $('.prices__button').click(function() { return false }) // Deactive buttons "register"
  $('.contact__form-submit').click(function() { return false }) // Deactive button "Send Message"
  $('.prices__item').click(function() { // go to button link when you push ".prices__item"
    let buttonHref = $(this).find('.prices__button-wrap').attr('href');
    window.location.replace(buttonHref);
  })

  let verticalImg = document.querySelectorAll('.features__image')[0] ;
  animateNow(verticalImg)
  let videoContent = document.querySelectorAll('.video__content')[0];
  animateNow(videoContent)
  let videoIframe = document.querySelectorAll('.video__iframe-container')[0];
  animateNow(videoIframe)

})