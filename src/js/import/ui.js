import '@fancyapps/fancybox';
import Slideout from 'slideout';
import datepicker from 'air-datepicker';

$('.datepicker-here').datepicker({
  inline: true
});

//Tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').children('div.tabs__content').fadeOut(500).eq($(this).index()).delay(450).fadeIn(500);
});



//SlideOut
let slideout = new Slideout({
  'panel': document.getElementById('panel'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70
});

slideout.disableTouch();
$('.open-menu').on('click', function() {
  slideout.toggle();
});

$('.slideout-menu a').on('click', function() {
  $(this).siblings('.sub').slideToggle();
});
