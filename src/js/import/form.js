import $ from 'jquery';
import Inputmask from 'inputmask/dist/inputmask/jquery.inputmask';

const cyrillicPattern = /[\u0400-\u04FF]/;
const numbersPatter = /^[а-яa-z]+$/;



$('form').submit(function(e) {
  e.preventDefault(); 
  var $form = $(this);
  if (Validate($form)) {
    ajaxMail($form);
  }
  
});
function ajaxMail($form) {
  $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize()
  }).done(function() {
    $('.intro__form__block').height($('.intro__form__block').height());
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



function Validate($form) {
  let phone = $form.find('.form-input-phone input');
  let isPhone = $form.find('.form-input-phone input').inputmask('isComplete');
  let text = $form.find('input:text');
  let isText = !isEmpty($form.find('input:text').val());
  validateInput(phone, isPhone);
  validateInput(text, isText);
}



if ($('.form-input-phone input').length) {
  $('.form-input-phone input').inputmask('+7(999) 999 99 99');
}

$('.form-input-phone input').focus(function() { 
  $('.form-input-phone input').keyup(function() { 
    if ($(this).inputmask('isComplete')) {
      $(this).removeClass('invalid');
      $(this).addClass('valid');
      $(this).siblings('.tooltip').fadeOut();

    } else{
      $(this).removeClass('valid');
      $(this).addClass('invalid');
      $(this).siblings('.tooltip-phone').fadeIn();
    }
  });
});

$('.form-input-text input').focus(function() { 
  $('.form-input-text input').keyup(function() { 
    if (numbersPatter.test($(this).val())) {
      $(this).removeClass('invalid');
      $(this).addClass('valid');
      $(this).siblings('.tooltip').fadeOut();
    } else{
      $(this).removeClass('valid');
      $(this).addClass('invalid');
      $(this).siblings('.tooltip-text').fadeIn();
    }
  });
});




$('input[type=email]').keyup(function() {
  let email = $(this).val();
  if (cyrillicPattern.test(email)) {
    console.log('кириллицы есть');
  } else {
    console.log('кириллицы нет');
  }
  if (validateEmail(email)) {
    $(this).removeClass('invalid');
    $(this).addClass('valid');
  } else {
    $(this).removeClass('valid');
    $(this).addClass('invalid');
  }
});


function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function isEmpty(str) {
  return !str.replace(/^\s+/g, '').length; // boolean (`true` if field is empty)
}

function validateInput(el,isEmpty) {
  if (isEmpty) {
    $(el).removeClass('invalid');
    $(el).addClass('valid');
    el.closest('.form-input').find('.tooltip-input').fadeOut();
    return false;
  } else {
    $(el).removeClass('valid');
    $(el).addClass('invalid');
    el.closest('.form-input').find('.tooltip-input').fadeIn();
    return true;
  }
}
