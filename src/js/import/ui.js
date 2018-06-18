import '@fancyapps/fancybox';
import Slideout from 'slideout';

//Tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

// //Kind
// function Kind() {
//   $('.kind__big, .kind__tabs, .kind__small').each(function(i) {
//     if ($(window).width() < 1024) {
//       return false;
//     }
//     let w;
//     if (i < 5) {
//       w = $(this).width();
//     } else{
//       w = $(this).prev().width();
//     }
//     $(this).height(w);

//   });
// }
// $(window).on('resize', function() {
//   Kind();
// });
// Kind();



//SlideOut
var slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70
});

$('.open-menu').on('click', function() {
  slideout.toggle();
});

$('.slideout-menu a').on('click', function() {
  $(this).siblings('.sub').slideToggle();
});
