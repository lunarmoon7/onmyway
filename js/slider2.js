const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const list = document.querySelector('.list');
const box = document.querySelectorAll('.box');

const boxLen = box.length;

prevBtn.addEventListener('click', () => {
  let listLeft = getComputedStyle(list).left.replace('px', '');

  if(listLeft !== '0') {
    list.style.left = (Number(listLeft) + 200) + 'px';
  } 
});

nextBtn.addEventListener('click', () => {
  let listLeft = getComputedStyle(list).left.replace('px', '');
  if(listLeft !== '-800') {
    list.style.left = (Number(listLeft) - 200) + 'px';
  } else {}
});