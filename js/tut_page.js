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
  nextBut.style.display = "block";
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

function showMenu() {
    ham.className = "ham_animate";
    ham_1.classList.toggle("ham_1_animate");
    ham_2.classList.toggle("ham_2_animate");
    ham_3.classList.toggle("ham_3_animate");
    menu_list.classList.toggle("menu_show");

}
