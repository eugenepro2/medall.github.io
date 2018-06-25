import './import/ui';
import './import/slider';
import './import/map';
import './import/dotted';
import './import/kind';
import './import/form';



import sayHello from './lib/sayHello.js';
sayHello();

if ($('.tabs__decision__articles').is(':visible')) {
  let oLeft = $('.tabs__decision__articles').offset().left;
  $('.tabs__decision__articles__item').css({
    'margin-left': -oLeft,
    'padding-left':  oLeft
  });  
}



$(window).on('scroll', function() {
  let scroll = $(window).scrollTop();
  let blockFree = $('.free').offset().top;
  if (scroll >= (blockFree - 500)) {
    $('.free__back').addClass('active');
    $('.free__woman').addClass('active');
  }
}); 
