import {TimelineMax, CustomEase} from 'gsap';


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
    }, 1000);
    

  });

  // $('.kind__big').click(function(e) { 
  //   e.preventDefault();
  //   tl.fromto('.kind__big__new', 1.5, {y:0, ease: Bounce.easeOut});    
  // });

  
});



