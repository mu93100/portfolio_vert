// texte défilant
function disparaitre() {
    // ça cache le container en desktop si présent
    let containerDeskop = document.getElementById('marqueeContainer');
    if (containerDeskop) { containerDeskop.classList.add('disparu') };

    let arrow = document.getElementById('arrow');
    if (arrow) { arrow.classList.add('disparu') };

    // ça cache le container en mobile si présent
    let containerMobile = document.getElementById('marqueeContainerMobile');
    if (containerMobile) { containerMobile.classList.add('disparu') };
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
    link.addEventListener('click', function (e) {
        // Vérifie la largeur de fenêtre pour n'agir qu'en mobile...

        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // Sinon (desktop), tu peux ignorer ou garder le comportement
    });
})

// modal Detail cardWork
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modalDetail');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = modal.querySelector('.closeModalBtn');

    document.querySelectorAll('.openModalBtn').forEach(btn => {
        btn.addEventListener('click', () => {
            const src = btn.getAttribute('data-img');
            if (src && modalImg) {
                modalImg.src = src;
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // bloque fond
                modal.setAttribute('aria-hidden', 'false');
            }
        });
    });

    const closeModal = () => {
        modal.style.display = 'none';
        if (modalImg) modalImg.src = '';
        document.body.style.overflow = ''; // débloque fond
        modal.setAttribute('aria-hidden', 'true');
    }

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', e => {
        if (e.target === modal) { // clic hors image ferme modale
            closeModal();
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            closeModal();
        }
    });
});

// // Sélection des éléments modale et image modale
// const modal = document.querySelector('.modalDetail');
// const modalImg = document.getElementById('modalImg');
// const closeBtn = modal.querySelector('.closeModalBtn');
// // Sélection de tous les boutons 'ouvrir modale'
// const openBtns = document.querySelectorAll('.openModalBtn');

// openBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         // Récupère l'URL de l'image depuis l'attribut data-img
//         const imgSrc = btn.getAttribute('data-img');

//         // Si l'image existe, met à jour la source de l'image modale
//         if (imgSrc) {
//             modalImg.src = imgSrc;
//             modal.style.display = 'flex';

//             // Optionnel : empêche le scroll page quand modale ouverte
//             document.body.style.overflow = 'hidden';
//         }
//     });
// });

// // Fermeture de la modale au clic sur le bouton close
// closeBtn.addEventListener('click', () => {
//     modal.style.display = 'none';
//     modalImg.src = ''; // nettoie l'image pour éviter flash d'ancienne image
//     document.body.style.overflow = ''; // réactive le scroll page
// });

// // Fermeture modale au clic sur le fond (hors image)
// modal.addEventListener('click', (e) => {
//     if (e.target === modal) {
//         modal.style.display = 'none';
//         modalImg.src = '';
//         document.body.style.overflow = '';
//     }
// });

// // Optionnel : fermeture au clavier (touche Escape)
// document.addEventListener('keydown', (e) => {
//     if (e.key === "Escape" && modal.style.display === 'flex') {
//         modal.style.display = 'none';
//         modalImg.src = '';
//         document.body.style.overflow = '';
//     }
// });


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
