document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = link.getAttribute('href');
        });
    });
});
