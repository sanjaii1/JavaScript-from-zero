window.addEventListener('load',calculateTime)

function calculateTime() {
  var date = new Date();

  var DayNumber = date.getDay();

  var hour = date.getHours();

  var minute = date.getMinutes();

  var ampm = hour >= 12 ? "PM" : "AM";

  var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  hour = hour % 12;
  hour = hour === 0 ? 12 : hour;
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;

  document.getElementById("day").innerHTML = dayNames[DayNumber];
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("ampm").innerHTML = ampm;

  setTimeout(calculateTime, 200);
}
