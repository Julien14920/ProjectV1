document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burgerMenu');
    const menuContent = document.getElementById('menuContent');
    const closeBtn = document.getElementById('closeBtn');

    burgerMenu.addEventListener('click', () => {
        menuContent.style.width = '250px';
    });

    closeBtn.addEventListener('click', () => {
        menuContent.style.width = '0';
    });
});