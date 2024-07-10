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

function toggleTheme() {
    var body = document.body;
    body.classList.toggle('light-theme');
    
    var themeButton = document.getElementById('theme-toggle');
    if (body.classList.contains('light-theme')) {
        themeButton.textContent = 'Mode Nuit';
    } else {
        themeButton.textContent = 'Mode Jour';
    }
}






// Fonction pour filtrer les plats par catégorie
function filterCategory(category) {
    // Sélectionne tous les éléments avec la classe 'plat'
    var plats = document.querySelectorAll('.plat');

    // Parcours tous les plats
    plats.forEach(function(plat) {
        // Vérifie si le plat a la classe correspondant à la catégorie sélectionnée ou si 'all' est sélectionné
        if (plat.classList.contains(category) || category === 'all') {
            plat.classList.add('visible'); // Ajoute la classe 'visible' pour afficher le plat
        } else {
            plat.classList.remove('visible'); // Retire la classe 'visible' pour cacher le plat
        }
    });
}

// Code pour initialiser le filtrage au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Filtrer par défaut tous les plats au chargement de la page
    filterCategory('all');
});

// Événements pour chaque bouton de catégorie
var buttons = document.querySelectorAll('.category-button');
buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        var category = this.getAttribute('data-category'); // Récupère la catégorie à filtrer
        filterCategory(category); // Appelle la fonction de filtrage avec la catégorie sélectionnée
    });
});