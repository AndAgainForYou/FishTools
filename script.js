document.addEventListener("DOMContentLoaded", function() {
    const burgerIcon = document.querySelector('.burger-icon');
    const menu = document.querySelector('.res-menu');

    burgerIcon.addEventListener('click', function() {
        menu.classList.toggle('show'); // Toggle the 'show' class on the menu
    });
});