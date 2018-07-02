import $ from 'jquery';
import 'owl.carousel';
import Swiper from 'swiper';

let introSlider = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

let certificate = $('.certificate-slider');
certificate.owlCarousel({
  margin: 15,
  loop: true,
  autoWidth: true,
  items: 4,
  responsive : {
    320 : {
      items: 1,
      autoWidth: false,
    },
    768 : {
      items: 4,
      autoWidth: true,
    }
  }
});

$('.certificate__next').click(function() {
  certificate.trigger('next.owl.carousel');
});
// Go to the previous item
$('.certificate__prev').click(function() {
  certificate.trigger('prev.owl.carousel');
});


let tabsReview = $('.review-slider');
tabsReview.owlCarousel({
  margin: 15,
  loop: true,
  items: 1,
});

$('.tabs__review__next').click(function() {
  tabsReview.trigger('next.owl.carousel');
});
// Go to the previous item
$('.tabs__review__prev').click(function() {
  tabsReview.trigger('prev.owl.carousel');
});



