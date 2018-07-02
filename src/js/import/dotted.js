import $ from 'jquery';
function Dotted() {
  $('.tabs__price__block').each(function() {
    let i = $(this).find('i');
    let span = $(this).find('span');
  
    let offsetW = $(window).width() - (i.offset().left + span.outerWidth());
    i.width(offsetW - span.outerWidth());
  }); 
}

$(window).on('scroll', function() {
  Dotted();
});

Dotted();

module.exports = Dotted;
