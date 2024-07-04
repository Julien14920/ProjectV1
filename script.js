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






document.addEventListener('DOMContentLoaded', function() {
    const btnEntrees = document.getElementById('btn-entrees');
    const btnPlats = document.getElementById('btn-plats');
    const btnDesserts = document.getElementById('btn-desserts');
    const listePlats = document.getElementById('liste-plats');

    // Exemple de données pour les plats, entrées et desserts
    const plats = [
        { type: "plat", nom: "Steak de bœuf grillé", description: "Steak de bœuf grillé servi avec des légumes de saison.", image: "steak.jpg" },
        { type: "plat", nom: "Poulet rôti", description: "Poulet rôti aux herbes accompagné de pommes de terre sautées.", image: "poulet.jpg" },
        { type: "plat", nom: "Pâtes carbonara", description: "Pâtes carbonara avec pancetta, œufs, parmesan et poivre noir.", image: "carbonara.jpg" },
        { type: "plat", nom: "Salade César", description: "Salade César classique avec poulet grillé, croûtons et sauce César.", image: "salade.jpg" },
        { type: "plat", nom: "Risotto aux champignons", description: "Risotto crémeux aux champignons sautés et parmesan.", image: "risotto.jpg" },

        { type: "entree", nom: "Salade Caprese", description: "Salade Caprese avec mozzarella fraîche, tomates et basilic.", image: "caprese.jpg" },
        { type: "entree", nom: "Bruschetta à la tomate", description: "Bruschetta traditionnelle à la tomate et à l'huile d'olive.", image: "bruschetta.jpg" },
        { type: "entree", nom: "Soupe à l'oignon gratinée", description: "Soupe à l'oignon gratinée avec croûtons et fromage fondant.", image: "soupe.jpg" },
        { type: "entree", nom: "Carpaccio de bœuf", description: "Carpaccio de bœuf mariné avec roquette et parmesan.", image: "carpaccio.jpg" },
        { type: "entree", nom: "Escargots à la bourguignonne", description: "Escargots cuits à la bourguignonne avec beurre à l'ail.", image: "escargots.jpg" },

        { type: "dessert", nom: "Crème brûlée", description: "Crème brûlée classique avec une croûte caramélisée.", image: "creme-brulee.jpg" },
        { type: "dessert", nom: "Tarte au citron meringuée", description: "Tarte au citron avec une meringue légère et acidulée.", image: "tarte-citron.jpg" },
        { type: "dessert", nom: "Fondant au chocolat", description: "Fondant au chocolat servi avec une boule de glace à la vanille.", image: "fondant-chocolat.jpg" },
        { type: "dessert", nom: "Tiramisu", description: "Tiramisu traditionnel avec café, mascarpone et biscuits imbibés.", image: "tiramisu.jpg" },
        { type: "dessert", nom: "Panna cotta aux fruits rouges", description: "Panna cotta crémeuse aux fruits rouges et coulis de fruits.", image: "panna-cotta.jpg" }
    ];

    function construirePlat(plat) {
        const platContainer = document.createElement('div');
        platContainer.classList.add('plat-container');
        platContainer.classList.add(plat.type); // Ajoute la classe spécifique au type de plat

        // Ajoute une image si elle est disponible
        if (plat.image) {
            const img = document.createElement('img');
            img.src = plat.image;
            img.alt = plat.nom;
            platContainer.appendChild(img);
        }

        const nomPlat = document.createElement('h3');
        nomPlat.textContent = plat.nom;
        platContainer.appendChild(nomPlat);

        const descriptionPlat = document.createElement('p');
        descriptionPlat.textContent = plat.description;
        platContainer.appendChild(descriptionPlat);

        return platContainer;
    }

    function afficherPlats(type) {
        listePlats.innerHTML = ''; // Efface la liste actuelle

        const platsFiltres = plats.filter(plat => plat.type === type);

        platsFiltres.forEach(plat => {
            const platElement = construirePlat(plat);
            listePlats.appendChild(platElement);
        });
    }

    // Événements pour afficher les plats, entrées et desserts respectivement
    btnPlats.addEventListener('click', function() {
        afficherPlats("plat");
    });

    btnEntrees.addEventListener('click', function() {
        afficherPlats("entree");
    });

    btnDesserts.addEventListener('click', function() {
        afficherPlats("dessert");
    });
});