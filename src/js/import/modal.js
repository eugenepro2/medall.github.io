import $ from 'jquery';
$('[data-pop]').on('click', function() {
  let href = $(this).attr('href');
  $(href).fadeIn();
  $('body').addClass('is-active');
});

//Close modal
$('.modal__block__close').on('click', function() {
  $('body').removeClass('is-active');
  $(this).closest('.modal').fadeOut();
});
