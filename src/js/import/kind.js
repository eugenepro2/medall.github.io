import {TimelineMax} from 'gsap';


$(function() {
  let tl = new TimelineMax();

  $('.kind__click').click(function(e) { 

    e.preventDefault();
    let curr = $(this).find('.kind__small__new');
    let smallImage = $(this).attr('data-img');
    let bigImage = $('.kind__big').attr('data-img');
    
    curr.css('background-image', `url(${bigImage})`);
    $('.kind__big__new').css('background-image', `url(${smallImage})`);
    
    tl.fromTo(curr, 1, {y: '-100%', ease: Bounce.easeOut}, {y:'0%', ease: Bounce.easeOut})
      .fromTo('.kind__big__new', 1, {y: '-100%', ease: Bounce.easeOut, }, {y:'0%', ease: Bounce.easeOut}, '-=1');
    
    $(this).attr('data-img', bigImage);
    $('.kind__big').attr('data-img', smallImage);

    setTimeout(function() {
      curr.siblings('article').css('background-image', `url(${bigImage})`);
      $('.kind__big').css('background-image', `url(${smallImage})`);
    }, 900);
    
    //change content
    let currHeading = $(this).find('h1').html();
    let currList = $(this).find('ul').html();
    let bigHeading = $('.kind__big').find('h1').html();
    let bigList = $('.kind__big').find('ul').html();

    $('.kind__big h1').html(currHeading);
    $('.kind__big ul').html(currList);
    $(this).find('h1').html(bigHeading);
    $(this).find('ul').html(bigList);


    // let smallHeading = $(this).attr('data-img');
    // let smallList = $(this).attr('data-img');
  });
  
});



