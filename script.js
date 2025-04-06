// JavaScript for Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('header nav ul');

    // Toggle the mobile menu visibility on click
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
    });

    // Close the mobile menu if any link is clicked
    const navItems = document.querySelectorAll('header nav ul li a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
});
