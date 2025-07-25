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

function handleScroll() {
    const arrow = document.getElementById('arrow');
    if (arrow && window.scrollY > 100) {
        arrow.classList.add('hidden');
        // On retire le scrollListener, la flèche ne reviendra plus
        window.removeEventListener('scroll', handleScroll);
    }
}

window.addEventListener('scroll', handleScroll);

// Ou, si tu veux que **n'importe où** sur la page fasse disparaître les deux :
document.body.addEventListener('click', disparaitre);

// links N A V M O B I L E 
const navLinks = document.querySelectorAll('.nav_link');
let lastActive = null;

navLinks.forEach(link => {
    // Clic = définit le lien actif
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        lastActive = link;
    });

    // Hover: retire la classe active du lien "fixe" pour que seul le hover soit visible
    link.addEventListener('mouseenter', () => {
        navLinks.forEach(l => l.classList.remove('active'));
    });

    // Quand la souris quitte le lien, on remet l'active sur le dernier cliqué
    link.addEventListener('mouseleave', () => {
        if (lastActive) lastActive.classList.add('active');
    });
});


// links.forEach(link => {
//     link.addEventListener('click', function (e) {
//         links.forEach(l => l.classList.remove('active'));
//         this.classList.add('active');
//     });
//     if ('nav_link:hover', 'cv:hover') {
//             this.classList.remove('active');
//         }  j'enlève suite corrigé CLAUDE 
// });

// --------------- M O D A L C V - CORRIGÉ ----------------
document.addEventListener('DOMContentLoaded', () => {
    const modalCv = document.querySelector('.modalCv');
    const closeBtnCv = document.querySelector('.closeModalCvBtn');
    const openCvBtns = document.querySelectorAll('.openModalCvBtn'); // Tous les boutons CV

    // Fonction pour ouvrir la modal CV
    const openModalCv = () => {
        if (modalCv) {
            modalCv.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // bloque fond
        }
    };

    // Fonction pour fermer la modal CV
    const closeModalCv = () => {
        if (modalCv) {
            modalCv.style.display = 'none';
            document.body.style.overflow = ''; // débloque fond
        }
    };

    // Ajouter l'événement à tous les boutons CV
    openCvBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModalCv();
        });
    });

    // Fermeture avec le bouton close
    if (closeBtnCv) {
        closeBtnCv.addEventListener('click', closeModalCv);
    }

    // fermeture si on click en dehors de la modal
    if (modalCv) {
        modalCv.addEventListener('click', e => {
            if (e.target === modalCv) { // clic hors contenu ferme modale
                closeModalCv();
            }
        });
    }

    // fermeture au clavier / avec echap
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modalCv && modalCv.style.display === 'flex') {
            closeModalCv();
        }
    });
});

// --------------- M O D A L C A R D W O R K - CORRIGÉ ----------------
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modalDetail');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.querySelector('.closeModalBtn');

    // Fonction pour fermer la modal
    const closeModal = () => {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // débloque fond
            modal.setAttribute('aria-hidden', 'true');
        }
        if (modalImg) {
            modalImg.src = '';
        }
    };

    // Ouverture des modales pour chaque carte
    document.querySelectorAll('.openModalBtn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const src = btn.getAttribute('data-img');

            if (src && modalImg && modal) {
                modalImg.src = src;
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden'; // bloque fond
                modal.setAttribute('aria-hidden', 'false'); // pour accessibilité
            }
        });
    });

    // Fermeture avec le bouton close
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // fermeture si on click en dehors de l'img
    if (modal) {
        modal.addEventListener('click', e => {
            if (e.target === modal) { // clic hors image ferme modale
                closeModal();
            }
        });
    }

    // fermeture au clavier / avec echap
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
            closeModal();
        }
    });
});

// --------------- A PROPOS - CORRIGÉ ----------------
document.addEventListener('DOMContentLoaded', () => {
    const bouton = document.getElementById('afficher_a_propos');
    const imageContainer = document.getElementById('image-container');
    const closeBtn = document.getElementById('close-btn');

    if (bouton && imageContainer) {
        bouton.addEventListener('click', function () {
            imageContainer.style.display = 'block';
        });
    }

    if (closeBtn && imageContainer) {
        closeBtn.addEventListener('click', function () {
            imageContainer.style.display = 'none';
        });
    }
});