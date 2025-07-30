// texte défilant + arrow disparaissent au 1er click
function disparaitre() {
    const containerDeskop = document.getElementById('marqueeContainer');
    if (containerDeskop) { containerDeskop.classList.add('disparu') };

    const arrow = document.getElementById('arrow');
    if (arrow) { arrow.classList.add('disparu') };

    const containerMobile = document.getElementById('marqueeContainerMobile');
    if (containerMobile) { containerMobile.classList.add('disparu') };
}
document.body.addEventListener('click', disparaitre);

// disparition arrow si scroll
function handleScroll() {
    const arrow = document.getElementById('arrow');
    if (arrow && window.scrollY > 100) { // 100 : change le seuil selon ton besoin
        // arrow.classList.add('hidden'); hidden n'enlève pas la taille de la div arrow
        arrow.style.transition = 'opacity 0,3s ease'; // on prépare la transition
        arrow.style.opacity = '0';
        arrow.addEventListener('transitionend', () => {
            arrow.style.display = 'none';
        }, { once: true }); // === quand transition opacité est terminée, la div arrow disparait

// n'occupe plus d'espace
        window.removeEventListener('scroll', handleScroll); // On retire le scrollListener, la flèche ne reviendra plus
    }
}
document.addEventListener('scroll', handleScroll);

// + rajouter le link avec border qui change selon le scroll sur div contact ou portfolio ??
// links N A V M O B I L E // claude qui marche border on click , disparait quand on mouseOver autre link 
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

// // --------------- M O D A L    C V ----------------
document.addEventListener('DOMContentLoaded', () => {
    const modalCv = document.querySelector('.modalCv');
    const closeBtnCv = document.querySelector('.closeModalCvBtn');
    const openCvBtn = document.querySelector('.openModalCvBtn'); // Tous les boutons CV
    const openCvBtns = document.querySelectorAll('.openModalCvBtn'); // pour nav desktop et navMobile

    // ouvrir modal CV
    openCvBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modalCv.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
// fermer modal CV
    if (closeBtnCv) {
        closeBtnCv.addEventListener('click', (e) => {
            e.preventDefault();
            modalCv.style.display = 'none';
            document.body.style.overflow = '';
        });
    };
    
});

// --------------- M O D A L   C A R D   W O R K ----------------
document.addEventListener('DOMContentLoaded', () => { // juste pour que ts les elements soient chargés avant exe du script
    const modal = document.querySelector('.modalDetail');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = modal.querySelector('.closeModalBtn');
    
    const closeModal = () => {
        modal.style.display = 'none';
        if (modalImg) modalImg.src = '';
        document.body.style.overflow = ''; // débloque fond
        modal.setAttribute('aria-hidden', 'true');
    }
    // Ouverture des modales pour chaque carte
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



