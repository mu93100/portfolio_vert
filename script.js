// texte défilant
function disparaitre() {
    // ça cache le container en desktop si présent
    let containerDeskop = document.getElementById('marqueeContainer');
    if(containerDeskop) {containerDeskop.classList.add('disparu')};

    let arrow = document.getElementById('arrow');
    if (arrow) {arrow.classList.add('disparu')};

    // ça cache le container en mobile si présent
    let containerMobile = document.getElementById('marqueeContainerMobile');
    if(containerMobile) {containerMobile.classList.add('disparu')};
}
function handleScroll() {
    if (window.scrollY > 100) {
        arrow.classList.add('hidden');
        // On retire le scrollListener, la flèche ne reviendra plus
        window.removeEventListener('scroll', handleScroll);
    }
}

window.addEventListener('scroll', handleScroll);

// window.addEventListener('scroll', () => {
//     if (window.scrollY > 100) { // change le seuil selon ton besoin
//         arrow.classList.add('hidden');
//     } else {
//         arrow.classList.remove('hidden');
//     }
// });

// js
// const arrow = document.getElementById('arrow');


// Ou, si tu veux que **n'importe où** sur la page fasse disparaître les deux :
document.body.addEventListener('click', disparaitre);



// links N A V
const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    link.addEventListener('click', function(e) {
    // Vérifie la largeur de fenêtre pour n'agir qu'en mobile...
    
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    
    // Sinon (desktop), tu peux ignorer ou garder le comportement
    });
})
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
