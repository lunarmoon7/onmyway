const dropdownBtn = document.querySelector('.dropdown_btn');
const submenu = document.querySelector('.dropdown_submenu');
const menuList = document.querySelectorAll('a');

dropdownBtn.addEventListener('click', () => {
  clickBtn();
});

for(let i = 0; i < menuList.length; i++) {
  menuList[i].addEventListener('mouseover', () => { mouseOverList(i); });
  menuList[i].addEventListener('mouseout', () => {
    mouseOutList(i); });
}

function clickBtn() {
  if(dropdownBtn.classList.contains('active')) {
    dropdownBtn.classList.remove('active');
    submenu.style.display = 'none';
  } else {
    dropdownBtn.classList.add('active');
    submenu.style.display = 'block';
  }
}


function mouseOverList(i) {
  menuList[i].style.backgroundColor = '#eee';
  menuList[i].style.transition = '0.3s';
}
function mouseOutList(i) {
  menuList[i].style.backgroundColor = '#fff';
  menuList[i].style.transition = '0.3s';
}