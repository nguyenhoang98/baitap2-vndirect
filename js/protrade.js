//  javascript phần time và date
getTime();
getDate();
function formatTimeAndDate(t) {
  if (t < 10) {
    t = "0" + t;
  }
  return t;
}
function getTime() {
  var d = new Date();
  var h = formatTimeAndDate(d.getHours());
  var m = formatTimeAndDate(d.getMinutes());
  var s = formatTimeAndDate(d.getSeconds());
  document.getElementById("time").innerHTML = h + ":" + m + " :" + s;
}
function getDate() {
  var date = new Date();
  var d = formatTimeAndDate(date.getDate());
  var m = formatTimeAndDate(date.getMonth() + 1);
  var y = formatTimeAndDate(date.getFullYear());

  document.getElementById("date").innerHTML = d + "-" + m + "-" + y;
  return d + "-" + m + "-" + y;
}

var timeId = setInterval(getTime, 1000);
var dateId = setInterval(getDate, 1000);

/*
javascript phần tab
*/
document.getElementById("action-1").click();
function openTab(id, t) {
  var tab_link = document.getElementsByClassName("tab-link");
  var tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  for (var i = 0; i < tab_link.length; i++) {
    tab_link[i].className = tab_link[i].className.replace(" active", "");
  }
  document.getElementById(id).style.display = "block";
  t.className += " active";
}

//

function setLayOutIpad(id, t) {
  if (window.innerWidth <= 1024) {
    layOutIpad(id, t);
  }
}

//
function layOutIpad(id, t) {
  document.getElementsByClassName("grid")[0].style.gridTemplateColumns =
    "1fr 350px 350px";
  document.getElementsByClassName("container__right")[0].style.display =
    "block";
  document.getElementsByClassName("tab")[0].style.width = "350px";
  openTab(id, t);
}

// tab in tab

function openTabInTab(id, t) {
  if (
    document.getElementsByClassName("container__right")[0].style.display ==
    "none"
  ) {
    FormatColDefault();
  }
  var tab_link = document.getElementsByClassName("tab-link-in-tab");
  var tabcontent = document.getElementsByClassName("tab-in-tab");

  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  for (var i = 0; i < tab_link.length; i++) {
    tab_link[i].className = tab_link[i].className.replace(" active", "");
  }
  document.getElementById(id).style.display = "block";
  t.className += " active";
}
document.getElementById("tab-link-in-tab-1").click();

function openTabDefault_1() {
  document.getElementById("tab-link-in-tab-1").click();
}
function openTabDefault_2() {
  document.getElementsByClassName("vtm")[0].click();
}

// tab form
function openFormInTab(id, t) {
  var tab_radio = document.getElementsByClassName("tab-radio");
  var tabForm = document.getElementsByClassName("tab-form-content");

  for (var i = 0; i < tabForm.length; i++) {
    tabForm[i].style.display = "none";
  }
  for (var i = 0; i < tabForm.length; i++) {
    tab_radio[i].className = tab_radio[i].className.replace(" active", "");
  }
  document.getElementById(id).style.display = "block";
  t.className += " active";
}
document.getElementById("tab-radio-1").click();

// tab trading-view
function openTradingView(id, t) {
  var linkTradingView = document.getElementsByClassName("link-trading-view");
  var tabTradingView = document.getElementsByClassName("tab-trading-view");

  for (var i = 0; i < tabTradingView.length; i++) {
    tabTradingView[i].style.display = "none";
  }
  for (var i = 0; i < linkTradingView.length; i++) {
    linkTradingView[i].className = linkTradingView[i].className.replace(
      " active",
      ""
    );
  }
  document.getElementById(id).style.display = "block";
  t.className += " active";
}
document.getElementById("vn30").click();

/* Phần toggle model */

function openModel() {
  document.getElementById("model").style.display = "block";
}
function closeModel() {
  document.getElementById("model").style.display = "none";
}

document.getElementById("top").onclick = openModel;
document.getElementById("close-model").onclick = closeModel;

//  Phần close section action (container__right)

var minus = document.getElementsByClassName("close-action");
for (var i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", function () {
    var tab_link = document.getElementsByClassName("tab-link");
    for (var i = 0; i < tab_link.length; i++) {
      tab_link[i].className = tab_link[i].className.replace(" active", "");
    }
    document.getElementsByClassName("container__right")[0].style.display =
      "none";
    document.getElementById("grid").style.gridTemplateColumns = "1fr 400px";
    document.getElementsByClassName("tab")[0].style.width = "400px";
  });
}

function FormatColDefault() {
  document.getElementsByClassName("container__right")[0].style.display =
    "block";
  document.getElementsByClassName("tab")[0].style.width = "400px";
  document.getElementById("grid").style.gridTemplateColumns = "1fr 350px 400px";
}

window.onresize = removeClassActive;
function removeClassActive() {
  var tab_link = document.getElementsByClassName("tab-link");
  for (var i = 0; i < tab_link.length; i++) {
    tab_link[i].className = tab_link[i].className.replace(" active", "");
  }
}

//  onresize

window.onresize = function () {
  if (window.innerWidth <= 1024) {
    document.getElementsByClassName("container")[0].style.gridTemplateColumns =
      "1fr 400px";
    document.getElementsByClassName("container__right")[0].style.display =
      "none";
    document.getElementsByClassName("tab")[0].style.width = "400px";
    document.getElementsByClassName("top")[0].style.display = "none";
  }
};
