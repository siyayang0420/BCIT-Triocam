var nextBut = document.querySelector('#next_button'),
    prevBut = document.querySelector('#prev_button'),
    tryBut = document.querySelector('#try_button'),
    page1 = document.querySelector('#page_1'),
    page2 = document.querySelector('#page_2'),
    page3 = document.querySelector('#page_3');

var n = 1,
    p = 3;

function nextPage() {
  console.log("hi")
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
  tryBut.style.display = "block";
}
};

function prevPage() {
  if(p == 3){
  p = p - 1;
  n = n - 1;
  page2.style.display = "block";
  page3.style.display = "none";
  tryBut.style.display = "none";
  nextBut.style.display = "block";
} else if(p == 2){
  p = p + 1;
  page1.style.display = "block";
  page2.style.display = "none";
  page3.style.display = "none";
  nextBut.style.display = "block";
  tryBut.style.display = "none";
  prevBut.style.display = "none";
}
};

var ham = document.querySelector(".ham");
var ham_1 = document.querySelector(".ham_1");
var ham_2 = document.querySelector(".ham_2");
var ham_3 = document.querySelector(".ham_3");
var menu_list = document.querySelector(".menu_list");

var btns = document.querySelector("#buttons");
function showMenu() {
    ham.className = "ham_animate";
    ham_1.classList.toggle("ham_1_animate");
    ham_2.classList.toggle("ham_2_animate");
    ham_3.classList.toggle("ham_3_animate");
    menu_list.classList.toggle("menu_show");
    btns.classList.toggle("btn_hide");

}
