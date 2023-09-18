const menuButton = document.getElementById("mobile-menu");
const navbar = document.getElementById("navbar-links");
const close = document.getElementById("close-nav");
const menu = document.getElementById("menu")

console.log(navbar);

menuButton.addEventListener('click', () => {
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
    menuButton.style.display = menuButton.style.display === 'none' ? 'block' : 'none';
    close.style.display = close.style.display === 'flex' ? 'none' : 'flex';
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

close.addEventListener('click', () => {
    navbar.style.display = navbar.style.display === 'none' ? 'flex' : 'none';
    menuButton.style.display = menuButton.style.display === 'flex' ? 'none' : 'flex';
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    close.style.display = close.style.display === 'none' ? 'flex' : 'none';
})