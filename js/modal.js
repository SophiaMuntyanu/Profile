"use strict";

const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modal = document.querySelectorAll(".modal");
const modalClose = document.querySelectorAll(".modal__close")


/*всплытие модального окна*/
modalBtn.forEach(item => {
   item.addEventListener('click', event => {
      let $this = event.currentTarget;
      let modalId = $this.getAttribute('data-modal');
      let modal = document.getElementById(modalId);
      let modalContent = modal.querySelector(".modal__content");

      modalContent.addEventListener("click", event => {
         event.stopPropagation();
      });

      modal.classList.add("show");
      body.classList.add("no-scroll");

      /*animation*/
      setTimeout(function() {
         modalContent.style.transform = 'none';
         modalContent.style.opacity = '1';
      }, 2);
   });
});

/*закрытие модального окна с помощью кнопки-крестика*/
modalClose.forEach(item => {
   item.addEventListener('click', event => {
      let currentModal = event.currentTarget.closest(".modal");

      closeModal(currentModal);
   });
});

modal.forEach(item => {
   item.addEventListener('click', event => {
      let currentModal = event.currentTarget;

      closeModal(currentModal);
   });
});

function closeModal(currentModal){
   let modalContent = currentModal.querySelector(".modal__content");
   modalContent.removeAttribute('style');
   /*animation*/
   setTimeout(() => {
      currentModal.classList.remove("show");
      body.classList.remove("no-scroll");
   }, 400);
}