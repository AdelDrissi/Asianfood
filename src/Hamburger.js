// scripts.js

document.addEventListener('DOMContentLoaded', function () {
  // Récupérer l'élément parent de "Produits"
  const parentItem = document.querySelector('.parent-item');
  // Récupérer le sous-menu
  const submenu = parentItem.querySelector('.submenu');
  // Récupérer le lien parent "Produits"
  const parentLink = parentItem.querySelector('.parent-link');

  // Fonction pour basculer la visibilité du sous-menu au clic sur le lien parent
  function toggleSubmenu() {
    if (submenu.style.display === 'block') {
      submenu.style.display = 'none';
    } else {
      submenu.style.display = 'block';
    }
  }

  // Ajouter un écouteur d'événement au clic sur le lien parent
  parentLink.addEventListener('click', function (event) {
    event.preventDefault(); // Empêcher le comportement par défaut du lien
    toggleSubmenu(); // Appeler la fonction pour basculer la visibilité du sous-menu
  });
});
// 