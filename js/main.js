// add scripts

$(document).on('ready', function() {
  var weddingDay = new Date('July 10, 2016');
  var today = new Date();
  var daysLeft = numDays(weddingDay.getTime() - today.getTime());

  $('#counter').html(daysLeft);

  setTimeout(function() {
      daysLeft = numDays(weddingDay.getTime() - today.getTime());
      $('#counter').html(daysLeft);
  }, 60000);
});

/** takes in milliseconds, spits out number of days */
function numDays(ms) {
    var approxDays = ms / 1000 / 60 / 60 / 24;
    return Math.ceil(approxDays);
}
