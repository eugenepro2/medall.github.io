import $ from 'jquery';

let domain = document.location.hostname;


ymaps.ready(function()
{
  var srednProspeCoord = [59.9458, 30.2870];
  var prospEngelsCoord = [60.0256, 30.3230];
  var centerBothCoord  = [59.9850, 30.2800];

  var zoomSingle = 15;
  var zoomBoth   = 11;

  var city                      = 'г. Санкт-Петербург';

  var srednProspeHintContent    = 'Средний проспект, д.5';
  var srednProspeBalloonContent = city + ',<br> м. Василеостровская/Спортивная,<br> Васильевский остров,<br> Средний проспект, д.5';

  var prospEngelsHintContent    = 'пр. Энгельса, д. 93';
  var prospEngelsBalloonContent = city + ',<br> м. Озерки / Удельная,<br> Выборгский район,<br> пр. Энгельса, д. 93';

  var markerOptions;
  if ($('body').hasClass('style-2')) {
    markerOptions = {
      iconLayout: 'default#image',
      iconImageHref: `http://${domain}/img/marker-2.png`,
      iconImageSize: [81, 76],
      iconImageOffset: [-3, -42]
    };  
  } else if($('body').hasClass('style-1')) {
    markerOptions = {
      iconLayout: 'default#image',
      iconImageHref: `http://${domain}/img/marker-1.png`,
      iconImageSize: [81, 76],
      iconImageOffset: [-3, -42]
    };  
  }
  

  var myMap = new ymaps.Map('map', {
    center: srednProspeCoord,
    zoom: zoomSingle,
    controls: []
  });

  var myPlacemark1 = new ymaps.Placemark(
    srednProspeCoord,
    {
      hintContent: srednProspeHintContent,
      balloonContent: srednProspeBalloonContent
    },
    markerOptions
  );

  var myPlacemark2 = new ymaps.Placemark(
    prospEngelsCoord,
    {
      hintContent: prospEngelsHintContent,
      balloonContent: prospEngelsBalloonContent
    },
    markerOptions
  );


  myMap.geoObjects.add(myPlacemark1);
  myMap.geoObjects.add(myPlacemark2);
  myMap.behaviors.disable('scrollZoom');


  $('.contact__link:nth-child(1)').on('click', function(event) {
    event.preventDefault();
    $('.contact__link').removeClass('active');
    $(this).addClass('active');

    myMap.setZoom(zoomSingle);
    myMap.panTo(srednProspeCoord);
  });

  $('.contact__link:nth-child(2)').on('click', function(event) {
    event.preventDefault();
    $('.contact__link').removeClass('active');
    $(this).addClass('active');
    myMap.setZoom(zoomBoth);
    myMap.panTo(centerBothCoord);
  });


}); // ymaps.ready

