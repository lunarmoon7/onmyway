const menuIcon = document.querySelector('.fa-bars');
const menuContent = document.querySelector('.menu-content');
const subMenu = document.querySelectorAll('.menu');

menuIcon.addEventListener('click', () => {
  clickMenuIcon();
});

function clickMenuIcon() {
  if(menuIcon.classList.contains('active')) {
    menuIcon.classList.remove('active');
    menuIcon.style.color = "#000";
    // menuContent.style.top = "-1000px";
    // menuContent.style.opacity = "0";
    menuContent.style.height = "0px";
    menuContent.style.transition = "ease-out 0.3s";
    subMenu.forEach((i) => { 
      i.style.display = "none";
    });
  } else {
    menuIcon.classList.add('active');
    // menuContent.style.top = "0px";
    // menuContent.style.opacity = "1";
    menuContent.style.height = "700px";
    menuContent.style.transition = "ease-in 0.3s";
    menuIcon.style.color = "dodgerblue";
    subMenu.forEach((i) => {
      i.style.display = "inline-block";
    });
  }
}