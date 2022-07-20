const openMenuBtn = document.querySelector('.fa-bars');
const closeMenuBtn = document.querySelector('.close-btn');
const menu = document.querySelector('#menu-content');
const list = document.querySelectorAll('li');
let listSize = list.length;

function menuOn() {
  menu.style.transform = "translateX(0px)";
  menu.style.transition = "ease-in 0.2s";
  // menu.style.opacity = "1";
  // menu.style.transition = "right 0.2s";
}

function menuOff() {
  menu.style.transform = "translateX(-300px)";
  menu.style.transition = "ease-out 0.2s";
  // menu.style.opacity = "0";
  // menu.style.transition = "left 0.2s";
}

openMenuBtn.addEventListener("click", () => {
  menuOn();
});

closeMenuBtn.addEventListener("click", () => {
  menuOff();
});

for(let i = 0; i < listSize; i++) {
  list[i].addEventListener("mouseover", () => {
    changeColor(list[i]);
  });
  list[i].addEventListener("mouseout", () => {
    undoColor(list[i]);
  });
}

function changeColor(target) {
  target.style.backgroundColor = "crimson";
  target.style.color = "#fff";
  target.style.transition = "0.2s";
}

function undoColor(target) {
  target.style.backgroundColor = "rgb(202, 200, 200)";
  target.style.color = "#000";
  target.style.transition = "0.2s";
}

// list.addEventListener("mouseover", () => {
//   list.style.backgroundColor = "crimson";
//   list.style.color = "#fff";
//   list.style.transition = "0.2s";
// });

// list.addEventListener('mouseout', e => {

// });

