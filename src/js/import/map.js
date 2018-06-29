// // ymaps.ready(init);
// // var myMap;

// // ymaps.ready(function () {   
// //   myMap = new ymaps.Map('map', {
// //     center: [59.945828, 30.286960],
// //     zoom: 7
// //   }),

// //   myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
// //     hintContent: 'Собственный значок метки',
// //     balloonContent: 'Это красивая метка'
// //   }, 
// //   {
// //     // Опции.
// //     // Необходимо указать данный тип макета.
// //     iconLayout: 'default#image',
// //     // Своё изображение иконки метки.
// //     iconImageHref: 'img/marker.png',
// //     // Размеры метки.
// //     iconImageSize: [30, 42],
// //     // Смещение левого верхнего угла иконки относительно
// //     // её "ножки" (точки привязки).
// //     iconImageOffset: [-5, -38]
// //   });

// //   myMap.geoObjects.add(myPlacemark);

// //   myMap.behaviors.disable('scrollZoom'); 

// // )};

// let dot1 = [59.9458, 30.2870];
// let dot2 = [60.0256, 30.3230];
// let dot3  = [59.9850, 30.2800];



// ymaps.ready(function() {
//   var myMap = new ymaps.Map('map', {
//       center: [59.945828, 30.286960],
//       zoom: 15
//     }, {
//       searchControlProvider: 'yandex#search'
//     }),

//     // Создаём макет содержимого.
//     MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//       '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
//     ),

//     myPlacemark1 = new ymaps.Placemark(dot1, {
//       hintContent: 'Средний проспект, д.5',
//       balloonContent: 'г. Санкт-Петербург, м. Василеостровская/Спортивная, Васильевский остров, Средний проспект, д.5'
//     }, {
//       // Опции.
//       // Необходимо указать данный тип макета.
//       iconLayout: 'default#image',
//       // Своё изображение иконки метки.
//       iconImageHref: 'img/marker.png',
//       // Размеры метки.
//       iconImageSize: [81, 76],
//       // Смещение левого верхнего угла иконки относительно
//       // её "ножки" (точки привязки).
//       iconImageOffset: [-5, -38]
//     }),
//     myPlacemark2 = new ymaps.Placemark(dot2, {
//       hintContent: 'Средний проспект, д.5',
//       balloonContent: 'г. Санкт-Петербург, м. Василеостровская/Спортивная, Васильевский остров, Средний проспект, д.5'
//     }, {
//       // Опции.
//       // Необходимо указать данный тип макета.
//       iconLayout: 'default#image',
//       // Своё изображение иконки метки.
//       iconImageHref: 'img/marker.png',
//       // Размеры метки.
//       iconImageSize: [81, 76],
//       // Смещение левого верхнего угла иконки относительно
//       // её "ножки" (точки привязки).
//       iconImageOffset: [-5, -38]
//     }),
//     myPlacemark3 = new ymaps.Placemark(dot3, {
//       hintContent: 'Средний проспект, д.5',
//       balloonContent: 'г. Санкт-Петербург, м. Василеостровская/Спортивная, Васильевский остров, Средний проспект, д.5'
//     }, {
//       // Опции.
//       // Необходимо указать данный тип макета.
//       iconLayout: 'default#image',
//       // Своё изображение иконки метки.
//       iconImageHref: 'img/marker.png',
//       // Размеры метки.
//       iconImageSize: [81, 76],
//       // Смещение левого верхнего угла иконки относительно
//       // её "ножки" (точки привязки).
//       iconImageOffset: [-5, -38]
//     });

//   myMap.geoObjects
//     .add(myPlacemar1)
//     .add(myPlacemark2)
//     .add(myPlacemark3);

//   myMap.behaviors.disable('scrollZoom'); 
// });

var contactsMap    = $('.contacts-map');

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

  var markerOptions = {
    iconLayout: 'default#image',
    iconImageHref: 'img/marker.png',
    iconImageSize: [81, 76],
    iconImageOffset: [-3, -42]
  };

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

