'use strict';

function animateNow(animationTarget) {
  function isElementInViewport(elem) {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = navigator.userAgent.toLowerCase().indexOf('webkit') != -1 ? 'body' : 'html';
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round($elem.offset().top);
    var elemBottom = elemTop + $elem.height();
    return elemTop < viewportBottom && elemBottom > viewportTop;
  }
  // Check if it's time to start the animation.
  function checkAnimation() {
    var $elem = $(animationTarget);

    if ($elem.hasClass('start-animate')) return;
    if (isElementInViewport($elem)) {
      $elem.addClass('start-animate');
    }
  }
  $(window).scroll(function () {
    checkAnimation();
  });
}

$(function () {
  $('.shots__content').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    dots: true,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
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

  $('.prices__button').click(function () {
    return false;
  }); // Deactive buttons "register"
  $('.contact__form-submit').click(function () {
    return false;
  }); // Deactive button "Send Message"
  $('.prices__item').click(function () {
    // go to button link when you push ".prices__item"
    var buttonHref = $(this).find('.prices__button-wrap').attr('href');
    window.location.replace(buttonHref);
  });

  var verticalImg = document.querySelectorAll('.features__image')[0];
  animateNow(verticalImg);
  var videoContent = document.querySelectorAll('.video__content')[0];
  animateNow(videoContent);
  var videoIframe = document.querySelectorAll('.video__iframe-container')[0];
  animateNow(videoIframe);
});