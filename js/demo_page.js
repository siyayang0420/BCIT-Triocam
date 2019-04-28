
var slider = document.querySelector("#slider");
var input = document.querySelector("input");

var backBtn =  document.querySelector("#backBtn");
var homeBtn =  document.querySelector("#homeBtn");
function showMenu() {
 backBtn.classList.toggle("backBtnMove");
 homeBtn.classList.toggle("homeBtnMove")
}

var pkg = {
  img_num: 1
}
//=====proxy setup
var handle = {
  set: function(obj, props, value) {
    if (props == "img_num") {
      changeImgUI(value, "img_num")
    }
  }
}

var proxyPkg = new Proxy(pkg, handle);

//=====stat func

var img7 = document.querySelector("#img7");
var img6 = document.querySelector("#img6");
var img5 = document.querySelector("#img5");
var img4 = document.querySelector("#img4");
var img3 = document.querySelector("#img3");
var img2 = document.querySelector("#img2");
var img1 = document.querySelector("#img1");

function changeImg(el) {
  proxyPkg.img_num = el.value;
}




//=====ui func

function changeImgUI(val, type) {
  if (type == "img_num" && val == 1) {

    img1.style.opacity = "1";
    img2.style.opacity = "0";
    img3.style.opacity = "0";
    img4.style.opacity = "0";
    img5.style.opacity = "0";
    img6.style.opacity = "0";
    img7.style.opacity = "0";
  } else if (type == "img_num" && val == 2) {
    img2.style.opacity = "1";
    img3.style.opacity = "0";
    img4.style.opacity = "0";
    img5.style.opacity = "0";
    img6.style.opacity = "0";
    img7.style.opacity = "0";
    img1.style.opacity = "0";
  } else if (type == "img_num" && val == 3) {
    img3.style.opacity = "1";
    img4.style.opacity = "0";
    img5.style.opacity = "0";
    img6.style.opacity = "0";
    img7.style.opacity = "0";
    img1.style.opacity = "0";
    img2.style.opacity = "0";
  } else if (type == "img_num" && val == 4) {
    img4.style.opacity = "1";
    img5.style.opacity = "0";
    img6.style.opacity = "0";
    img7.style.opacity = "0";
    img1.style.opacity = "0";
    img2.style.opacity = "0";
    img3.style.opacity = "0";
  } else if (type == "img_num" && val == 5) {
    img5.style.opacity = "1";
    img6.style.opacity = "0";
    img7.style.opacity = "0";
    img1.style.opacity = "0";
    img2.style.opacity = "0";
    img3.style.opacity = "0";
    img4.style.opacity = "0";
  } else if (type == "img_num" && val == 6) {
    img6.style.opacity = "1";
    img7.style.opacity = "0";
    img1.style.opacity = "0";
    img2.style.opacity = "0";
    img3.style.opacity = "0";
    img4.style.opacity = "0";
    img1.style.opacity = "0";
  } else if (type == "img_num" && val == 7) {
    img7.style.opacity = "1";
    img1.style.opacity = "0";
    img2.style.opacity = "0";
    img3.style.opacity = "0";
    img4.style.opacity = "0";
    img1.style.opacity = "0";
    img6.style.opacity = "0";
  }
}
