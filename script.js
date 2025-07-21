// texte défilant
function disparaitre() {
    // ça cache le container en desktop si présent
    let containerDeskop = document.getElementById('marqueeContainer');
    if(containerDeskop) {containerDeskop.classList.add('disparu')};

    // ça cache le container en mobile si présent
    let containerMobile = document.getElementById('marqueeContainerMobile');
    if(containerMobile) {containerMobile.classList.add('disparu')};
}
// Ou, si tu veux que **n'importe où** sur la page fasse disparaître les deux :
document.body.addEventListener('click', disparaitre);



// function disparaitre() {
//     document.getElementById('marqueeContainer').classList.add('disparu');
// }
// document.body.addEventListener('click', disparaitre);

// // texte défilant_mobile
// function disparaitre() {
//     document.getElementById('marqueeContainerMobile').classList.add('disparu');
// }
// document.body.addEventListener('click', disparaitre);


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
