import $ from 'jquery';
import '@fancyapps/fancybox';
import Slideout from 'slideout';
import 'air-datepicker';
import Inputmask from 'inputmask';


//Если элемент в ViewPort
$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
  if ($('.home-doctor').is(':visible')) {
    if ($('.home-doctor').isInViewport()) {
      $('.counter').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
      
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
    
        {
    
          duration: 2000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
          }
    
        }); 
    
      });  
    }
  }

});


//Плавный скролл при загрузке страницы
setTimeout(function() {
  let top = $(location.hash).offset().top;

  $('html, body').animate({
    scrollTop: top
  }, 1000);  
}, 1500);






//Маска телефона
if ($('#phone').length) {
  Inputmask({'mask': '+7(999) 999 99 99'}).mask(document.getElementById('phone'));  
}

//Распасание в виде календаря
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


//Услуги, блок статьи, отступ слева
if ($('.tabs__decision__articles').is(':visible')) {
  let oLeft = $('.tabs__decision__articles').offset().left;
  $('.tabs__decision__articles__item').css({
    'margin-left': -oLeft,
    'padding-left':  oLeft
  });  
}


//Аницаия блока с девушкой
$(window).on('scroll', function() {
  let scroll = $(window).scrollTop();
  let blockFree = $('.free').offset().top;
  if (scroll >= (blockFree - 500)) {
    $('.free__back').addClass('active');
    $('.free__woman').addClass('active');
  }
}); 


