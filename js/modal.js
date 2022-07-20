const openModalBtn = document.getElementById('btn');
const modal = document.getElementById('modal');
const modalWindow = modal.querySelector('#modal-window');
const closeBtn = modalWindow.querySelector('.closeBtn');
const body = document.body;

openModalBtn.addEventListener("click", () => {
  modalOn();
});

closeBtn.addEventListener("click", () => {
  modalOff();
});

modal.addEventListener("click", e => {
  const eventTarget = e.target;
  if(eventTarget.classList.contains('modal-overlay')) {
    modalOff();
  }
})

function modalOn() {
  modal.style.display = "flex";
  modalWindow.style.display = "block";
  modalWindow.style.backgroundColor = "rgba(30, 144, 255, 0.6)";
  body.style.overflow = "hidden";
  
}

function modalOff() {
  modal.style.display = "none";
  modalWindow.style.display = "none";
  modalWindow.style.transition = "0.3s";
}