let searchBtn = document.getElementById('search-btn');
let searchForm = document.querySelector('.search-form');
let loginForm = document.querySelector('.login-form');
let formClose = document.getElementById('form-close');
let menuBar = document.getElementById('menu-bar');
let navBar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.video-btn');


function showbar() {
    searchBtn.classList.toggle("fa-times");
    searchForm.classList.toggle("active");
}


function showForm() {
    loginForm.classList.toggle("active");
}


function hideForm() {
    loginForm.classList.remove("active");
}


function showMenu() {
    menuBar.classList.toggle("fa-times");
    navBar.classList.toggle("active");
}


videoBtn.forEach(slide => {
    slide.addEventListener("click", function () {
        document.querySelector('.blue').classList.remove('blue');
        slide.classList.add('blue');
        src = slide.getAttribute('data-src');
        document.getElementById('video-slider').src = src;
    })
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500
    },
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});