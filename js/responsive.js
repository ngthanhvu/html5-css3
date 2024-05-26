const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('#navmenu');
const navIcon = document.querySelector('#nav-icon');

mobileMenu.addEventListener('click', () => {
    if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
        navIcon.style.display = "none";
    } else {
        navMenu.style.display = "block";
        navIcon.style.display = "flex";
    }
});