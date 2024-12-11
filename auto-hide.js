// script.js

let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down, hide the navbar
        navbar.style.top = '-80px';  // Adjust height depending on your navbar size
    } else {
        // Scrolling up, show the navbar
        navbar.style.top = '0';
    }
    lastScrollY = window.scrollY;
});
