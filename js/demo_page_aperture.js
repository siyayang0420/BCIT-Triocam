var ham = document.querySelector(".ham");
var ham_1 = document.querySelector(".ham_1");
var ham_2 = document.querySelector(".ham_2");
var ham_3 = document.querySelector(".ham_3");
var menu_list = document.querySelector(".menu_list");
var slider = document.querySelector("#slider");
var input = document.querySelector("input");
var img1 = document.querySelector("#img1");

function showMenu() {
  ham.className = "ham_animate";
  ham_1.classList.toggle("ham_1_animate");
  ham_2.classList.toggle("ham_2_animate");
  ham_3.classList.toggle("ham_3_animate");
  menu_list.classList.toggle("menu_show");
  slider.classList.toggle("slide_show");
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

var img = document.querySelector(".img");
var img7 = document.querySelector(".img7");
var img6 = document.querySelector(".img6");
var img5 = document.querySelector(".img5");
var img4 = document.querySelector(".img4");
var img3 = document.querySelector(".img3");
var img2 = document.querySelector(".img2");
var img1 = document.querySelector(".img1");

function changeImg(el) {
  proxyPkg.img_num = el.value;
}




//=====ui func
var icon_warning = document.querySelector("#icon_warning");
var pop_up = document.querySelector("#pop_up");

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
