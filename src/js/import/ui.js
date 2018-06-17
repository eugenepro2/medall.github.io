import '@fancyapps/fancybox';

//Tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function() {
  $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

//Kind
function Kind() {
  $('.kind__big, .kind__tabs, .kind__small').each(function(i) {
    if ($(window).width() < 1024) {
      return false;
    }
    let w;
    if (i < 5) {
      w = $(this).width();
    } else{
      w = $(this).prev().width();
    }
    $(this).height(w);

  });
}
$(window).on('resize', function() {
  Kind();
});
Kind();
