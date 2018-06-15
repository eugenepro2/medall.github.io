import 'owl.carousel';


let certificate = $('.certificate-slider');
certificate.owlCarousel({
  margin: 15,
  loop: true,
  autoWidth: true,
  items: 4
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
