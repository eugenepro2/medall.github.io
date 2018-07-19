import $ from 'jquery';
import device from 'current-device';

$(function() {
  if (!device.mobile()) {
    Kind();
  } else{
    $('.kind__click').click(function(e) { 
      e.preventDefault();
      location.href = $(this).attr('data-href');
    });
  }


  function Kind() {
    $('.kind__click').click(function(e) { 

      e.preventDefault();
      let curr = $(this).find('.kind__small__new');
      let smallImage = $(this).attr('data-img');
      let bigImage = $('.kind__big').attr('data-img');

      $(this).find('article').addClass('active');
      $('.kind__big__old')
        .addClass('active')
        .children('.glitch__img').css('background-image', `url(${bigImage})`);
      curr
        .css('background-image', `url(${bigImage})`)
        .addClass('active')
        .children('.glitch__img').css('background-image', `url(${bigImage})`);

      setTimeout(() => {
        curr.css('z-index', '1');
        $('.kind__big__old')
          .css('background-image', `url(${smallImage})`)
          .css('z-index', -1)
          .children('.glitch__img').css('background-image', `url(${smallImage})`);
        $('.kind__big__new')
          .addClass('active')
          .css('background-image', `url(${smallImage})`)
          .css('z-index', 1)
          .children('.glitch__img').css('background-image', `url(${smallImage})`);
      }, 1000);

      setTimeout(() => {
        curr
          .css('z-index', '-1')
          .removeClass('active');
        $('.kind__big__new').removeClass('active').css('z-index', -1);
        $('.kind__big__old').removeClass('active').css('z-index', 1);
        $(this).find('article')
          .removeClass('active')
          .children('.glitch__img').css('background-image', `url(${bigImage})`);
      }, 2000);

  
  
      $(this).attr('data-img', bigImage);
      $('.kind__big').attr('data-img', smallImage);


      setTimeout(function() {
        curr.siblings('article').css('background-image', `url(${bigImage})`);
        $('.kind__big').css('background-image', `url(${smallImage})`);
      }, 3000);
  
      //change content
      let currHeading = $(this).find('h1').html();
      let currList = $(this).find('ul').html();
      let bigHeading = $('.kind__big').find('h1').html();
      let bigList = $('.kind__big').find('ul').html();

      setTimeout(() => {
        $('.kind__big h1').html(currHeading);
        $('.kind__big ul').html(currList);
        $(this).find('h1').html(bigHeading);
        $(this).find('ul').html(bigList);
      }, 1000);

      //Change Tabs
      let currId = $(this).attr('data-id');
      let bigId = $('.kind__big').attr('data-id');
  

      $(`.kind-${bigId}`).removeClass('active');
      $(`.kind-${currId}`).delay(300).addClass('active');

      $('.kind__big').attr('data-id', currId);
      $(this).attr('data-id', bigId);

    });
  }
});



