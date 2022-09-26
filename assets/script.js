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

let printData = function () {
  let today = new Date();
  let data = today.toLocaleDateString("it-IT", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  console.log(data);
  document.getElementById("data").innerText = data;
};
