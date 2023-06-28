'use strict';


let openMenu = document.querySelector('.open-menu');
let mobileMenu = document.querySelector('.mobile-menu');
let navLinks = document.querySelectorAll(".nav-link");


openMenu.addEventListener('click', function (event) {
    event.preventDefault();
    document.body.classList.toggle("_lock");
    openMenu.classList.toggle("active");
    mobileMenu.classList.toggle("open");
});

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function (event) {
        document.body.classList.remove("_lock");
        openMenu.classList.remove("active");
        mobileMenu.classList.remove("open");
    });
  });