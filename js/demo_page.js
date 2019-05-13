
var slider = document.querySelector(".slider");
var input = document.querySelector("input");

var backBtn =  document.querySelector(".backBtn");
var homeBtn =  document.querySelector(".homeBtn");
var hamBtn = document.querySelector("#ham");
function showMenu() {
 backBtn.classList.toggle("backBtnMove");
 homeBtn.classList.toggle("homeBtnMove");
 ham.className = "ham_animate";
 ham_1.classList.toggle("ham_1_animate");
 ham_2.classList.toggle("ham_2_animate");
 ham_3.classList.toggle("ham_3_animate");
}


var ham = document.querySelector(".ham");
var ham_1 = document.querySelector(".ham_1");
var ham_2 = document.querySelector(".ham_2");
var ham_3 = document.querySelector(".ham_3");



var pkg = {
  img_num: 1,
  iso : "",
  ss : "",
  aper : ""
}

var storagePkg = localStorage.getItem("pkg");

if(storagePkg){
  pkg = JSON.parse(storagePkg);
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

function changeImg(el, type) {
  if (type == "aper"){
    pkg.aper = el.value;
  }
  else if (type == "iso"){
    pkg.iso = el.value;
  }
  else if (type == "ss"){
    pkg.ss = el.value;
  }
  localStorage.setItem("pkg", JSON.stringify(pkg))
  proxyPkg.img_num = el.value;
}




//=====ui func

function changeImgUI(val, type) {
  if (type == "img_num" && val == 1) {

    img1.style.opacity = "1";
    img2.style.opacity = "0";
    img3.style.opacity = "0";
    img4.style.opacity = "0";
  } else if (type == "img_num" && val == 2) {
    img2.style.opacity = "1";
    img3.style.opacity = "0";
    img4.style.opacity = "0";
    img1.style.opacity = "0";
  } else if (type == "img_num" && val == 3) {
    img3.style.opacity = "1";
    img4.style.opacity = "0"
    img1.style.opacity = "0";
    img2.style.opacity = "0";
  } else if (type == "img_num" && val == 4) {
    img4.style.opacity = "1";
    img1.style.opacity = "0";
    img2.style.opacity = "0";
    img3.style.opacity = "0";
  }


}

console.log(pkg);
