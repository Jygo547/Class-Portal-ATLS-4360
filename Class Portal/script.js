const menuButton = document.getElementById("mobile-menu");
const navbar = document.getElementById("navbar-links");
const close = document.getElementById("close-nav");
const menu = document.getElementById("menu");



console.log(navbar);

menuButton.addEventListener('click', () => {
    navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
    menuButton.style.display = menuButton.style.display === 'none' ? 'flex' : 'none';
    close.style.display = close.style.display === 'flex' ? 'none' : 'flex';
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

close.addEventListener('click', () => {
    navbar.style.display = navbar.style.display === 'none' ? 'flex' : 'none';
    menuButton.style.display = menuButton.style.display === 'flex' ? 'none' : 'flex';
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    close.style.display = close.style.display === 'none' ? 'flex' : 'none';
});

document.addEventListener('DOMContentLoaded', () => {

    const errorAlert = document.getElementById("profile");

//This did not run

    errorAlert.addEventListener('click', () => {
        alert('This page is not added yet.');
    
        window.location.href = 'index.html';
    })
    
});

// Error Note: The navbar toggle button works fine when the screen size is reduced, but after interacting with the navbar and increasing the size, the navbar doesn't show normally and the toggle button remains.