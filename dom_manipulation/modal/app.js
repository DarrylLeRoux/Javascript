'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Remove hidden class for modal and overlay function
const removeModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Add hidden class to the modal and overlay function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Loop over the modals and call removeModal for each
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', removeModal);
}

//Close overlay and Modal
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
