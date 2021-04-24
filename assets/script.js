// DISPLAY CURRENT DATE + TIME
var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#datetime')
    update();
    setInterval(update, 1000);
});

$('#modal-form').on('shown.bs.modal', function () {
    $('#openFormBtn').trigger('focus')
  })
