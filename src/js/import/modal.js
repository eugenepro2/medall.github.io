import $ from 'jquery';
$('[data-pop]').on('click', function() {
  openModal(this);
});


$('.doctors__block .btn').click(function(e) { 
  e.preventDefault();
  openModal(this);
});



function openModal(curr) {
  $('body').addClass('is-active');
  let href = $(curr).attr('href');
  $(href).fadeIn();
}

//Close modal
$('.modal__block__close').on('click', function() {
  $('body').removeClass('is-active');
  $(this).closest('.modal').fadeOut();
});
