const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Show navlinks / hide nav links when user clicks the menu button
menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
    menuButton.classList.toggle('is-open');
})