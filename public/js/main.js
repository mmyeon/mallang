//페이지 이동
function moveToMain() {
  location.assign("main.html");
}

//말랑이 만난 날짜 계산
var date1 = new Date("10/08/2018");
var date2 = new Date();

var Difference_In_Time = date2.getTime() - date1.getTime();

var Difference_In_Days =
  Math.floor(Difference_In_Time / (1000 * 3600 * 24)) + 1;

document.getElementById("js_date").innerHTML = Difference_In_Days;

/* TODO: 함께 한 날짜 카운트로 보이기. 0 ~ 현재까지*/
