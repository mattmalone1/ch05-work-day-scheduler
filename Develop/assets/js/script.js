var dateDisplay = $('#currentDay');

// handle displaying the time
function displayTime() {
    var today = moment().format('LL');
    dateDisplay.text(today);
  }

  setInterval(displayTime, 1000);