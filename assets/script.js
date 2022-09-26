function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

let updateTime = function () {
  let today = new Date();
  let ora = checkTime(today.getHours()) + ":" + checkTime(today.getMinutes()) + ":" + checkTime(today.getSeconds());
  document.getElementById("time").innerText = ora;
};

let timerID = setInterval(updateTime, 1000);

updateTime();

let today = new Date();
var days;
switch (today.getDay()) {
  case 0:
    days = "domenica";
    break;
  case 1:
    days = "lunedì";
    break;
  case 2:
    days = "martedì";
    break;
  case 3:
    days = "mercoledì";
    break;
  case 4:
    days = "giovedì";
    break;
  case 5:
    days = "venerdì";
    break;
  case 6:
    days = "sabato";
    break;
}

let printData = function () {
  let dateIT = today.toLocaleDateString("it-IT");
  console.log(dateIT);
  let data = today.getDay(dateIT);

  document.getElementById("data").innerText = data;
};
