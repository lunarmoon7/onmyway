const lines = document.querySelectorAll('.line');
const lineSize = lines.length;
const container = document.getElementById('container');

container.addEventListener('click', () => {
  if(container.classList.contains('active')) {
    initAnimationToOrigin();
    container.classList.remove('active');
  } else {
    changeAnimation();
    container.classList.add('active');
  }
  
})

function changeAnimation() {
  toRightBottom();
  lines[1].style.opacity = "0";
  toLeftTop();
}
function initAnimationToOrigin() {
  lines[0].style.top = "0";
  lines[0].style.transform = "rotate(0)";
  lines[1].style.opacity = "1";
  lines[2].style.top = "100%";
  lines[2].style.transform = "rotate(0)";
}

function toRightBottom() {
  lines[0].style.top = "50%";
  lines[0].style.transform = "rotate(45deg)";
}

function toLeftTop() {
  lines[2].style.top = "50%";
  lines[2].style.transform = "rotate(-45deg)";
}



