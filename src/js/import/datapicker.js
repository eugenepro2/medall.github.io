import 'air-datepicker';
import $ from 'jquery';
import moment from 'moment';
//Распасание в виде календаря

let date = $('.datepicker-here').attr('data-array');
let dateArr = date.split(',');
let newArr = [];
dateArr.forEach(function(el) {
  let date = moment(el).toDate();
  newArr.push(date);
});

let datepicker = $('.datepicker-here').datepicker({
  inline: true,
  multipleDates: true,
  onSelect: function(date, inst) {
    $('#modal-form').find('#date').val(date);
    $('body').addClass('is-active');
    $('#modal-form').fadeIn();
  },
  onRenderCell: function(date) {
    date = date.toString();
    let newDate;

    setTimeout(function() {
      $('.datepicker--cell-day').each(function() {
        if (!$(this).hasClass('my-class')) {
          $(this).addClass('-disabled-');
        }
      });
    }, 500);

    newArr.forEach(function(item) {
      item = item.toString();
      
      if (date === item) {
        newDate = item;
      }
    });

    if (date === newDate) {
      return {
        classes: 'my-class -selected-',
        disabled: false
      };
    }
    
  }
}).data('datepicker');


