


var ap1 = document.querySelector("#ap1"),
    ap2 = document.querySelector("#ap2"),
    ap3 = document.querySelector("#ap3"),
    ap4 = document.querySelector("#ap4"),
    isoImg = document.querySelector("#isoImg"),
    ang1 = document.querySelector("#ang1"),
    ang2 = document.querySelector("#ang2"),
    ang3 = document.querySelector("#ang3"),
    ang4 = document.querySelector("#ang4");


var card = document.querySelector("#whiteCard");

function cardShow(){
  card.classList.toggle("cardShow");
}


var nextBut = document.querySelector('#arrowRight'),
    prevBut = document.querySelector('#arrowLeft'),
    page1 = document.querySelector('#page1'),
    page2 = document.querySelector('#page2'),
    page3 = document.querySelector('#page3');

var n = 1,
    p = 3;

function nextPage() {
  if(n == 1){
  n = n + 1;
  page2.style.display = "block";
  page1.style.display = "none";
  prevBut.style.display = "block";
} else if(n == 2){
  page3.style.display = "block";
  page2.style.display = "none";
  page1.style.display = "none";
  prevBut.style.display = "block";
  nextBut.style.display = "none";
}
};

function prevPage() {
  if(p == 3){
  p = p - 1;
  n = n - 1;
  page2.style.display = "block";
  page3.style.display = "none";
  nextBut.style.display = "block";
} else if(p == 2){
  p = p + 1;
  page1.style.display = "block";
  page2.style.display = "none";
  page3.style.display = "none";
  nextBut.style.display = "block";
}
};

var ham = document.querySelector(".ham");
var ham_1 = document.querySelector(".ham_1");
var ham_2 = document.querySelector(".ham_2");
var ham_3 = document.querySelector(".ham_3");
var menu_list = document.querySelector(".menu_list");

var ap = document.querySelector(".ap");
var ss = document.querySelector(".ss");
var iso = document.querySelector(".iso");

function showMenu() {
    // ham.className = "ham_animate";
    ham_1.classList.toggle("ham_1_animate");
    ham_2.classList.toggle("ham_2_animate");
    ham_3.classList.toggle("ham_3_animate");
    menu_list.classList.toggle("menu_show");
    ap.classList.toggle("apAnim");
    ss.classList.toggle("ssAnim");
    iso.classList.toggle("isoAnim");
}

var pkg = {
  img_num: 1,
  iso : 1,
  ss : 1,
  aper : 1
}


//=====Proxy Set Up
var handler = {
  set: function(obj, props, value){
    if (props == "aper") {
      changeImgUI(value, "aper")
    }
    if (props == "ss") {
      changeImgUI(value, "ss")
    }
    if (props == "iso") {
      changeImgUI(value, "iso")
    }
  }
}

var proxyPkg = new Proxy(pkg, handler);


//=====Stat FUNC
function changeImg(el, type){
  if (type == "aper") {
    pkg.aper = el.value;
    proxyPkg.aper = el.value
  }
  else if (type == "ss") {
    pkg.ss = el.value
    proxyPkg.ss = el.value
    console.log(el.value);
  }
  else if (type == "iso") {
    pkg.iso = el.value
    proxyPkg.iso = el.value
  }

  // proxyPkg.aper = el.value
  // proxyPkg.ss = el.value
  // proxyPkg.iso = el.value
}



//=======UI func
function changeImgUI(val, type){
  if (type == "aper" && val == 1) {
    ap1.style.opacity = "1";
  }
  if (type == "aper" && val == 2) {
    ap2.style.opacity = "1";
    ap1.style.opacity = "0";
  }

  if (type == "aper" && val == 3) {
    ap3.style.opacity = "1";
    ap2.style.opacity = "0";
    ap1.style.opacity = "0";
  }

  if (type == "aper" && val == 4) {
    ap4.style.opacity = "1";
    ap3.style.opacity = "0";
    ap2.style.opacity = "0";
    ap1.style.opacity = "0";
  }

  if (type == "ss" && val == 1) {
    ang1.style.opacity = "1"
  }
  if (type == "ss" && val == 2) {
    ang2.style.opacity = "1"
    ang1.style.opacity = "0"
  }
  if (type == "ss" && val == 3) {
    ang3.style.opacity = "1"
    ang2.style.opacity = "0"
    ang1.style.opacity = "0"
  }
  if (type == "ss" && val == 4) {
    ang4.style.opacity = "1"
    ang2.style.opacity = "0"
    ang1.style.opacity = "0"
    ang3.style.opacity = "0"
  }

  if (type == "iso" && val == 1) {
    isoImg.style.opacity = "1"
  } else if (type == "iso" && val == 2) {
    isoImg.style.opacity = "0.7"
  } else if(type == "iso" & val == 3) {
    isoImg.style.opacity = "0.5"
  } else if(type == "iso" & val == 4) {
    isoImg.style.opacity = "0"
  }


}
var isoMetric = document.querySelector("#isoMetric");
var ssMetric = document.querySelector("#ssMetric");
var aperMetric = document.querySelector("#aperMetric");
var logo = document.querySelector(".logo");
var inputSliders = document.querySelector("#inputSliders");
var hamBase = document.querySelector(".hamBase")
function barShow(){
  logo.classList.toggle("barInpShow");
  inputSliders.classList.toggle("barInpShow");
  hamBase.classList.toggle("barInpShow");
  isoMetric.classList.toggle("barInpShow");
  ssMetric.classList.toggle("barInpShow");
  aperMetric.classList.toggle("barInpShow");
}
console.log(changeImgUI);
