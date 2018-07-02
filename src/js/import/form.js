import $ from 'jquery';
//Ajax отправка формы
$('form').submit(function(e) {
  e.preventDefault(); 
  var $form = $(this);
  ajaxMail($form);
});
function ajaxMail($form) {
  $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize()
  }).done(function() {
    $('.intro__form').height($('.intro__form').height());
    $('.free').height($('.free').height());
    $('.subscribe').height($('.subscribe').height());
    $form.fadeOut(500); 
    $form.siblings('.response').delay(1000).fadeIn();
    $('form input').each(function() {
      $(this).delay(3000).val('');
    });
  }).fail(function() {
    $form.fadeOut(500); 
    $form.siblings('.error').delay(500).fadeIn();
  });
}
