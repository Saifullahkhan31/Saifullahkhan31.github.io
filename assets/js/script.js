'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);


// Get Modal for project details
document.addEventListener("DOMContentLoaded", () => {
  const projectLinks = document.querySelectorAll(".project-link");
  const modals = document.querySelectorAll(".modal-container");
  const closeButtons = document.querySelectorAll(".modal-close-btn");

  projectLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const dialogId = link.getAttribute("data-dialog");
      const dialog = document.getElementById(dialogId);
      if (dialog) {
        dialog.classList.add("active");
        dialog.querySelector(".overlay").classList.add("active");
      }
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener("click", () => {
      modals.forEach(modal => {
        modal.classList.remove("active");
        modal.querySelector(".overlay").classList.remove("active");
      });
    });
  });

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("overlay")) {
      e.target.classList.remove("active");
      e.target.parentElement.classList.remove("active");
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modals.forEach(modal => {
        if (modal.classList.contains("active")) {
          modal.classList.remove("active");
          modal.querySelector(".overlay").classList.remove("active");
        }
      });
    }
});
});


// Testimonials Modal
document.addEventListener('DOMContentLoaded', () => {
  const openModalButtons = document.querySelectorAll('[data-modal-open]');
  const closeModalButton = document.querySelector('[data-modal-close-btn]');
  const modalContainer = document.querySelector('[data-modal-container]');
  const overlay = document.querySelector('[data-overlay]');

  if (!modalContainer || !overlay) {
    console.error('Modal container or overlay not found!');
    return;
  }

  openModalButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Opening modal...');
      modalContainer.classList.add('active');
      overlay.classList.add('active');
      console.log('Modal classes after open:', modalContainer.classList);
    });
  });

  const closeModal = () => {
    console.log('Closing modal...');
    modalContainer.classList.remove('active');
    overlay.classList.remove('active');
    console.log('Modal classes after close:', modalContainer.classList);
  };

  if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal);
  }

  if (overlay) {
    overlay.addEventListener('click', closeModal);
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modalContainer.classList.contains('active')) {
      closeModal();
    }
  });

  window.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });
});


// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}




// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}


// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}