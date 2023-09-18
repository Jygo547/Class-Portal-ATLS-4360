const menuButton = document.getElementById("mobile-menu");
const navbar = document.getElementById("navbar-links");
const close = document.getElementById("close-nav");

console.log(navbar);

menuButton.addEventListener('click', () => {
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
    menuButton.style.display = menuButton.style.display === 'none' ? 'block' : 'none';
    close.style.display = close.style.display === 'flex' ? 'none' : 'flex';
});