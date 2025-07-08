// texte défilant
function disparaitre() {
    document.getElementById('marqueeContainer').classList.add('disparu');
}
document.body.addEventListener('click', disparaitre);

// a propos
let bouton = document.getElementById('afficher_a_propos');
let imageContainer = document.getElementById('image-container');
let closeBtn = document.getElementById('close-btn');

bouton.addEventListener('click', function () {
    imageContainer.style.display = 'block'; // Affiche le conteneur avec l'image
});

closeBtn.addEventListener('click', function () {
    imageContainer.style.display = 'none'; // Masque le conteneur avec l'image
});
