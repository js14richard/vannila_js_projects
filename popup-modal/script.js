'use strict';

const modalElement = document.querySelector('.modal');

const modalCloseButton = document.querySelector('.close-modal');

const overlayElement = document.querySelector('.overlay');

const modalButtons = document.querySelectorAll('.show-modal');


// Handling the show Modal

function showModal(){
    modalElement.classList.remove('hidden');
    overlayElement.classList.remove('hidden');
}

for (let i=0; i < modalButtons.length; i ++){
    modalButtons[i].addEventListener('click', showModal);
}


// Handling the close Modal 

function hideModal(){
    modalElement.classList.add('hidden');
    overlayElement.classList.add('hidden');
}

modalCloseButton.addEventListener('click', hideModal);


// Handling click of Modal when clicked outside modal

overlayElement.addEventListener('click', hideModal);


//Handling Esc Key press to close modal

document.addEventListener('keydown', function(e){
    // Checking whether the element is currently not hidden
    if (!modalElement.classList.contains('hidden') && e.key === "Escape"){
        hideModal();
    }
})