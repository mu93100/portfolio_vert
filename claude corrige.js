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