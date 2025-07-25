// texte défilant
function disparaitre() {
    // ça cache le container en desktop si présent
    const containerDeskop = document.getElementById('marqueeContainer');
    if (containerDeskop) { containerDeskop.classList.add('disparu') };

    const arrow = document.getElementById('arrow');
    if (arrow) { arrow.classList.add('disparu') };

    // ça cache le container en mobile si présent
    const containerMobile = document.getElementById('marqueeContainerMobile');
    if (containerMobile) { containerMobile.classList.add('disparu') };
}


// marqueeContainer et arrow : disparaissent au 1er click
document.body.addEventListener('click', disparaitre);

// function handleScroll() {
//     if (window.scrollY > 100) {
//         arrow.classList.add('hidden');
//         // On retire le scrollListener, la flèche ne reviendra plus
//         window.removeEventListener('scroll', handleScroll);
//     }
// }

// enlever arrow si scroll
function handleScroll() {
    const arrow = document.getElementById('arrow');
    if (arrow && window.scrollY > 100) { // 100 : change le seuil selon ton besoin
        arrow.classList.add('hidden');
        // On retire le scrollListener, la flèche ne reviendra plus
        window.removeEventListener('scroll', handleScroll);
    }
}
window.addEventListener('scroll', handleScroll);





// links  N A V   M O B I L E 
const links = document.querySelectorAll('.nav_link');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        
        // Sinon (desktop), tu peux ignorer ou garder le comportement
    });
    // if ('nav_link:hover', 'cv:hover') {
    //         this.classList.remove('active');
    //     }  j'enlève suite corrigé CLAUDE 
})
// --------------- M O D A L    C V ----------------
document.addEventListener('DOMContentLoaded', () => {
    const modalCv = document.querySelector('.modalCv');
    // const modalImgCv = document.getElementById('modalImgCv'); 
    // j'enlève suite corrigé CLAUDE : modalImgCv etait déjà en comm ds index
    const closeBtnCv = modal.querySelector('.closeModalCvBtn');
    const openCv = document.querySelector('.openModalCvBtn'); 
        // openCv.addEventListener('click')  ----------- MU
        //         modalCv.style.display = 'flex';
        //         document.body.style.overflow = 'hidden'; // bloque fond/ pas de défilement possible
        // Fonction pour ouvrir modalCv
    const openModalCv = () => {
        if (modalCv) {
            modalCv.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // bloque fond
        }
    };

    // Fonction pour fermer modalCv
    const closeModalCv = () => {
        if (modalCv) {
            modalCv.style.display = 'none';
            document.body.style.overflow = ''; // débloque fond
        }
    };  
    // // fermeture si on click en dehors de l’img
    // modal.addEventListener('click', e => {
    //     if (e.target === modalCv) { // clic hors image ferme modale
    //         closeModalCv();
    //     }
    // });
    // // fermeture au clavier / avec echap
    // document.addEventListener('keydown', e => {
    //     if (e.key === 'Escape' && modalCv.style.display === 'flex') {
    //         closeModalCv();
    //     }      
    });
// Fermeture avec le bouton close
if (closeBtnCv) {
    closeBtnCv.addEventListener('click', closeModalCv);
}
    // const closeModalCv = () => { ---------------MU
    //     modal.style.display = 'none';
    //     document.body.style.overflow = ''; // débloque fond
    // }

    // closeBtnCv.addEventListener('click', closeModalCv);

    // });


// --------------- M O D A L   C A R D   W O R K ----------------
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
                document.body.style.overflow = 'hidden'; // bloque fond/ pas de défilement possible
                modal.setAttribute('aria-hidden', 'false'); // === modal visible, super pour accessibilité
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

    // fermeture si on click en dehors de l’img
    modal.addEventListener('click', e => {
        if (e.target === modal) { // clic hors image ferme modale
            closeModal();
        }
    });
    // fermeture au clavier / avec echap
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
const bouton = document.getElementById('afficher_a_propos');
const imageContainer = document.getElementById('image-container');
const closeBtn = document.getElementById('close-btn');

bouton.addEventListener('click', function () {
    imageContainer.style.display = 'block'; // Affiche le conteneur avec l'image
});

closeBtn.addEventListener('click', function () {
    imageContainer.style.display = 'none'; // Masque le conteneur avec l'image
});
