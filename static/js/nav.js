const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navAnchors = document.querySelectorAll('.nav-links a');

function closeMenu() {
    navLinks.classList.remove('is-open');
    menuButton.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');

    // Keep the button's visual and accessibility state in sync with the menu.
    menuButton.classList.toggle('is-open', isOpen);
    menuButton.setAttribute('aria-expanded', isOpen);
});


// Close menu after selecting a nav link 
navAnchors.forEach((link) => {
    link.addEventListener('click', closeMenu);
});


// Close menu when Escape is pressed 
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeMenu();
    }
});