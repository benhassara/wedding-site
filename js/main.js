$(document).on('ready', function() {
  let weddingDay = new Date('July 15, 2017');
  let today = new Date();
  let daysLeft = numDays(weddingDay.getTime() - today.getTime());

  $('#counter').html(daysLeft);

  setTimeout(function() {
      daysLeft = numDays(weddingDay.getTime() - today.getTime());
      $('#counter').html(daysLeft);
  }, 60000);
});

/** takes in milliseconds, spits out number of days */
function numDays(ms) {
    let approxDays = ms / 1000 / 60 / 60 / 24;
    return Math.ceil(approxDays);
}
