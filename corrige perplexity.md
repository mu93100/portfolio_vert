Analyse du problème
Vous avez rencontré deux soucis :

La modal "Detail" ne s’ouvre pas quand vous cliquez sur une image de projet.

La modal "CV" ne fonctionne pas non plus.

Ces fonctionnalités dépendent du code JavaScript dans script.js. Voici les points clés à vérifier, ainsi qu’un exemple de code pour corriger la logique.

1. Sélection des éléments DOM
Vérifiez que les sélecteurs dans votre JavaScript ciblent bien les bons éléments :

javascript
// Pour la modal Détail des projets
const openModalBtns = document.querySelectorAll('.openModalBtn');
const modalDetail = document.querySelector('.modalDetail');
const modalImg = document.getElementById('modalImg');
const closeModalBtn = document.querySelector('.closeModalBtn');

// Pour la modal CV
const openModalCvBtns = document.querySelectorAll('.openModalCvBtn');
const modalCv = document.querySelector('.modalCv');
const closeModalCvBtn = document.querySelector('.closeModalCvBtn');
2. Gestion des événements d’ouverture
Modal Detail
Chaque bouton ".openModalBtn" doit ouvrir la modal et afficher l'image associée :

javascript
openModalBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // Récupère la source de l'image à afficher
    const imgSrc = btn.getAttribute('data-img');
    if (modalImg) modalImg.src = imgSrc || '';
    if (modalDetail) modalDetail.style.display = 'flex';
  });
});
Modal CV
javascript
openModalCvBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    if (modalCv) modalCv.style.display = 'flex';
  });
});
3. Gestion des fermetures
Modal Detail
javascript
if (closeModalBtn && modalDetail) {
  closeModalBtn.addEventListener('click', function() {
    modalDetail.style.display = 'none';
    if (modalImg) modalImg.src = '';
  });
}
Modal CV
javascript
if (closeModalCvBtn && modalCv) {
  closeModalCvBtn.addEventListener('click', function() {
    modalCv.style.display = 'none';
  });
}
4. Vérifications courantes
Vérifiez qu’il n’y a pas plusieurs éléments avec le même id dans la page (id doit être unique).

Assurez-vous que script.js est bien chargé après le HTML (il doit être à la fin du body).

Utilisez display: flex pour afficher les modales (et non block, car vous utilisez Flexbox).

Vérifiez les chemins d’images dans le HTML (ex. data-img="./img/montreuil_img.jpeg").

5. Exemple de script.js complet
javascript
document.addEventListener('DOMContentLoaded', function() {
  // Modal Detail (projets)
  const openModalBtns = document.querySelectorAll('.openModalBtn');
  const modalDetail = document.querySelector('.modalDetail');
  const modalImg = document.getElementById('modalImg');
  const closeModalBtn = document.querySelector('.modalDetail .closeModalBtn');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const imgSrc = btn.getAttribute('data-img');
      if (modalImg) modalImg.src = imgSrc || '';
      if (modalDetail) modalDetail.style.display = 'flex';
    });
  });

  if (closeModalBtn && modalDetail) {
    closeModalBtn.addEventListener('click', function() {
      modalDetail.style.display = 'none';
      if (modalImg) modalImg.src = '';
    });
  }

  // Modal CV
  const openModalCvBtns = document.querySelectorAll('.openModalCvBtn');
  const modalCv = document.querySelector('.modalCv');
  const closeModalCvBtn = document.querySelector('.modalCv .closeModalCvBtn');

  openModalCvBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      if (modalCv) modalCv.style.display = 'flex';
    });
  });

  if (closeModalCvBtn && modalCv) {
    closeModalCvBtn.addEventListener('click', function() {
      modalCv.style.display = 'none';
    });
  }
});
6. Astuces supplémentaires
Pour que le clic hors de la modale ferme aussi la pop-up, ajoutez un événement sur .modalDetail et .modalCv.

Utilisez .stopPropagation() pour contrôler le comportement des clics.

Résumé
Vérifiez le chargement correct du JavaScript et l’unicité des id.

Assurez-vous que les sélecteurs correspondent à la structure HTML réelle.

Utilisez display: flex pour les modales, et pas block.

Testez les exemples ci-dessus pour corriger l’ouverture et la fermeture de vos modales.

N’hésitez pas à partager le début de votre script.js si cela ne fonctionne toujours pas après corrections : le souci peut venir d’un détail lié à l’ordre de chargement ou un conflit de sélecteurs.

header {
    display: flex;
    justify-content: space-between;
    padding: 0;
    /* border: 1px dotted rgb(230, 149, 28); */
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: white;
}
.container_header{
    display: flex;
    flex-direction: column;
    width: 100%;
   
}
.container_mobile{
    display: none;
}


/* dégradé */
.green {
    background: linear-gradient(rgba(255, 255, 255), 0.5%,
                                rgba(135, 255, 165, 0.3) 3% ,
                                rgba(135, 255, 165, 0.7) 40%,
                                rgba(135, 255, 165, 0.9) );    
    height: 2rem;
    padding: 0 3rem;
    margin: 0;
}
.green1 {
    background: linear-gradient(rgba(255, 255, 255), 2%,
                                rgba(135, 255, 165, 0.07) 1% ,
                                rgba(135, 255, 165, 0.3) 40%,
                                rgb(135, 255, 165, 0.5));
    height: 2rem;
    padding: 0 3rem;
    margin: 0;
}
.green2{
    background: linear-gradient(to bottom, rgba(255, 255, 255) 10%,
                                            rgb(135, 255, 165, 0.2));
    height: 2rem !important;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 3rem;
    margin: 0;
}
.green_mil{
    background: linear-gradient(to top, rgba(255, 255, 255) 10%, rgb(135, 255, 165, 0.2));
    height: 1.8rem;
    display: none;
}
/* F I N dégradé */



/* Style N A V */
.nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    /* max-height: 100%; */
}
.nav ul li {
    margin: 0 1rem;
}
.nav ul li a, .nav_mobile ul li a, #cv{
    display: block;
}


.nav_mobile ul {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


.name, .dev, .ultra, .nav ul li a, #cv, .contact, .portfolio, .nav_mobile ul li a {
    width: 100%;
    font-family: "Doto", sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    color: black;
    letter-spacing: .15rem;
    text-shadow: 0.02em 0.02em 0.003em rgb(255, 255, 255),
        0.015em 0.015em 0.0051em rgb(255, 255, 255),
        0 0 0.1em rgb(255, 255, 255),
        0 0 0.2em rgb(255, 255, 255);
        /* 0.015em 0.015em 0.01em rgb(0, 0, 0),  */
    padding: 0.15rem 0 0 0;
    margin: 0;
    text-decoration: none;
    border-bottom: 0.1rem solid transparent; /* lien qui ne bougent pas */
    transition: border-color 0.3s; /* pour animation fluide */
    height: 2rem;
    /* border: 1px dotted lightpink;  */
}
.nav_mobile ul li a {
    padding-top: 0.1rem;
    display: flex; /* display et justify === border sur toute la div et non pas que sur le mot */
    justify-content: start;
    text-decoration: none;
    transition: border-color 0.3s; /* pour animation fluide */
}
.nav_link:hover, #cv:hover {
    border-bottom: 0.1rem solid black;
}
.nav_mobile .nav_link.active, #cv.active {
    border-bottom: 0.1rem solid black;
}
/* ---------------- M O D A L   C V ---------------  */
.modalCv, .modalCv a{
    width: 100%;
    height: 100%;
}
/*
.openModalCvBtn {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(../img/openModal.png);
    background-repeat: no-repeat;
    background-size: contain;
    width: 4rem;
    height: 4rem;
    transition: opacity 0.3s ease;    
} */


.modalCv {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    /* background-color: rgba(253, 250, 236, 0.8);  */
    /* background-color: rgb(237, 230, 10, 0.9) ; */


    background-color: rgba(255, 255, 255, 0.9) ;
    /* background: linear-gradient(rgba(255, 255, 255, 0.7), 38%,
    rgba(248, 4, 208, 0.9)); */
    /* background: linear-gradient( rgba(255, 255, 255, 0.5) 10%,
    rgba(135, 255, 165, 0.3) 3% ,
    rgba(135, 255, 165, 0.7) 40%,
    rgba(135, 255, 165, 0.9) );      */
/* rgb(3, 253, 66),
        0 0 0.2em rgb(135, 255, 165)
        rgba(135, 255, 165, 0.3) 3% ,
                                rgba(135, 255, 165, 0.7) 40%,
                                rgba(135, 255, 165, 0.9) );
background: linear-gradient(rgba(255, 255, 255), 0.5%,
                                rgba(135, 255, 165, 0.3) 3% ,
                                rgba(135, 255, 165, 0.7) 40%,
                                rgba(135, 255, 165, 0.9) );    


    background: linear-gradient(rgba(255, 255, 255), 2%,
                                rgba(135, 255, 165, 0.07) 1% ,
                                rgba(135, 255, 165, 0.3) 40%,
                                rgb(135, 255, 165, 0.5));



    background: linear-gradient(to bottom, rgba(255, 255, 255) 10%,
                                            rgb(135, 255, 165, 0.2));*/
    display: none;  /* ------------- déjà ds HTML -------------- */
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    padding-left: 5rem;
    z-index: 9999;
}


.modalCv img {
    max-width: 70vw;
    max-height: 90vh;
    object-fit: contain;
    box-shadow: 0 0 15px rgb(135, 255, 165, 0.7);
}


.closeModalCvBtn, .sendEmail, .uploadCv {
    background-repeat: no-repeat;
    background-size: contain;
    width: 4rem;
    height: 4rem;
    margin-left: 2rem;
   
}
.sendEmail {
    background-image: url(../img/email.png);
}
.uploadCv {
    background-image: url(../img/email.png);
    display:inline-block
}


/*
Téléphones (portrait)       ≤ 600   @media (max-width: 600px)
Tablettes (portrait/paysage)    601 – 991   @media (min-width: 600px)
Tablettes (paysage)     ≥ 768   @media (min-width: 768px)
Laptops / Desktops      ≥ 992   @media (min-width: 992px)
Grands écrans           ≥ 1200  @media (min-width: 1200px) */
/* ------------------------  R E S P O N S I V E  ----------------------*/
@media (max-width: 768px) {
    header{
        flex-wrap: wrap;
        flex-direction: column;
    }
    .container_header .nav { display: none; }
    .name, .dev, .ultra, ul, .nav_mobile ul li a {
        font-size: 1rem;    
    }  
    .container_mobile {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .green, .green1, .green2 {
        padding: 0 0 0 3rem;
        margin: 0;
        align-items: start;
    }
    .green_mil {
        display: block;
    }
   
}
header {     display: flex;     justify-content: space-between;     padding: 0;     /* border: 1px dotted rgb(230, 149, 28); */     position: sticky;     top: 0;     z-index: 1000;     background-color: white; } .container_header{     display: flex;     flex-direction: column;     width: 100%;     } .container_mobile{     display: none; } /* dégradé */ .green {     background: linear-gradient(rgba(255, 255, 255), 0.5%,                                 rgba(135, 255, 165, 0.3) 3% ,                                 rgba(135, 255, 165, 0.7) 40%,                                 rgba(135, 255, 165, 0.9) );         height: 2rem;     padding: 0 3rem;     margin: 0; } .green1 {     background: linear-gradient(rgba(255, 255, 255), 2%,                                 rgba(135, 255, 165, 0.07) 1% ,                                 rgba(135, 255, 165, 0.3) 40%,                                 rgb(135, 255, 165, 0.5));     height: 2rem;     padding: 0 3rem;     margin: 0; } .green2{     background: linear-gradient(to bottom, rgba(255, 255, 255) 10%,                                             rgb(135, 255, 165, 0.2));     height: 2rem !important;     display: flex;     flex-direction: row;     justify-content: space-between;     flex-wrap: wrap;     align-items: center;     padding: 0 3rem;     margin: 0; } .green_mil{     background: linear-gradient(to top, rgba(255, 255, 255) 10%, rgb(135, 255, 165, 0.2));     height: 1.8rem;     display: none; } /* F I N dégradé */ /* Style N A V */ .nav ul {     list-style-type: none;     margin: 0;     padding: 0;     display: flex;     justify-content: center;     /* max-height: 100%; */ } .nav ul li {     margin: 0 1rem; } .nav ul li a, .nav_mobile ul li a, #cv{     display: block; } .nav_mobile ul {     margin: 0;     padding: 0;     box-sizing: border-box; } .name, .dev, .ultra, .nav ul li a, #cv, .contact, .portfolio, .nav_mobile ul li a {     width: 100%;     font-family: "Doto", sans-serif;     font-size: 1.1rem;     font-weight: 500;     color: black;     letter-spacing: .15rem;     text-shadow: 0.02em 0.02em 0.003em rgb(255, 255, 255),         0.015em 0.015em 0.0051em rgb(255, 255, 255),         0 0 0.1em rgb(255, 255, 255),         0 0 0.2em rgb(255, 255, 255);         /* 0.015em 0.015em 0.01em rgb(0, 0, 0),  */     padding: 0.15rem 0 0 0;     margin: 0;     text-decoration: none;     border-bottom: 0.1rem solid transparent; /* lien qui ne bougent pas */     transition: border-color 0.3s; /* pour animation fluide */     height: 2rem;     /* border: 1px dotted lightpink;  */ } .nav_mobile ul li a {     padding-top: 0.1rem;     display: flex; /* display et justify === border sur toute la div et non pas que sur le mot */     justify-content: start;     text-decoration: none;     transition: border-color 0.3s; /* pour animation fluide */ } .nav_link:hover, #cv:hover {     border-bottom: 0.1rem solid black; } .nav_mobile .nav_link.active, #cv.active {     border-bottom: 0.1rem solid black; } /* ---------------- M O D A L   C V ---------------  */ .modalCv, .modalCv a{     width: 100%;     height: 100%; } /* .openModalCvBtn {     opacity: 0;     position: absolute;     top: 50%;     left: 50%;     transform: translate(-50%, -50%);     background-image: url(../img/openModal.png);     background-repeat: no-repeat;     background-size: contain;     width: 4rem;     height: 4rem;     transition: opacity 0.3s ease;     } */ .modalCv {     position: fixed;     top: 0;     left: 0;     width: 100vw;     height: 100vh;     /* background-color: rgba(253, 250, 236, 0.8);  */     /* background-color: rgb(237, 230, 10, 0.9) ; */     background-color: rgba(255, 255, 255, 0.9) ;     /* background: linear-gradient(rgba(255, 255, 255, 0.7), 38%,     rgba(248, 4, 208, 0.9)); */     /* background: linear-gradient( rgba(255, 255, 255, 0.5) 10%,     rgba(135, 255, 165, 0.3) 3% ,     rgba(135, 255, 165, 0.7) 40%,     rgba(135, 255, 165, 0.9) );      */ /* rgb(3, 253, 66),         0 0 0.2em rgb(135, 255, 165)         rgba(135, 255, 165, 0.3) 3% ,                                 rgba(135, 255, 165, 0.7) 40%,                                 rgba(135, 255, 165, 0.9) ); background: linear-gradient(rgba(255, 255, 255), 0.5%,                                 rgba(135, 255, 165, 0.3) 3% ,                                 rgba(135, 255, 165, 0.7) 40%,                                 rgba(135, 255, 165, 0.9) );         background: linear-gradient(rgba(255, 255, 255), 2%,                                 rgba(135, 255, 165, 0.07) 1% ,                                 rgba(135, 255, 165, 0.3) 40%,                                 rgb(135, 255, 165, 0.5));     background: linear-gradient(to bottom, rgba(255, 255, 255) 10%,                                             rgb(135, 255, 165, 0.2));*/     display: none;  /* ------------- déjà ds HTML -------------- */     /* flex-direction: column; */     justify-content: center;     align-items: center;     padding-left: 5rem;     z-index: 9999; } .modalCv img {     max-width: 70vw;     max-height: 90vh;     object-fit: contain;     box-shadow: 0 0 15px rgb(135, 255, 165, 0.7); } .closeModalCvBtn, .sendEmail, .uploadCv {     background-repeat: no-repeat;     background-size: contain;     width: 4rem;     height: 4rem;     margin-left: 2rem;     } .sendEmail {     background-image: url(../img/email.png); } .uploadCv {     background-image: url(../img/email.png);     display:inline-block } /* Téléphones (portrait)       ≤ 600   @media (max-width: 600px) Tablettes (portrait/paysage)    601 – 991   @media (min-width: 600px) Tablettes (paysage)     ≥ 768   @media (min-width: 768px) Laptops / Desktops      ≥ 992   @media (min-width: 992px) Grands écrans           ≥ 1200  @media (min-width: 1200px) */ /* ------------------------  R E S P O N S I V E  ----------------------*/ @media (max-width: 768px) {     header{         flex-wrap: wrap;         flex-direction: column;     }     .container_header .nav { display: none; }     .name, .dev, .ultra, ul, .nav_mobile ul li a {         font-size: 1rem;         }       .container_mobile {         display: flex;         flex-direction: column;         width: 100%;         margin: 0;         padding: 0;     }     .green, .green1, .green2 {         padding: 0 0 0 3rem;         margin: 0;         align-items: start;     }     .green_mil {         display: block;     }     }
Voici quelques remarques/corrections pour tes styles CSS concernant la modale CV et le header, en lien avec la logique HTML/JS fournie dans la conversation :

1. Modale CV (.modalCv)
Ta modale modalCv doit être centrée (grâce à display: flex), mais tu n’as pas mis display: flex; dans la règle.

Correction à faire :

css
.modalCv {
    /* ... les autres propriétés ... */
    display: none;  /* caché par défaut */
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
Quand tu l’ouvres en JS, tu mets modalCv.style.display = 'flex' donc il faut préciser que flex doit fonctionner sur ce bloc.

2. Boutons à l’intérieur de .modalCv
Tu appliques bien des tailles fixes (4rem) à .closeModalCvBtn, .sendEmail, .uploadCv.

Attention :

.uploadCv utilise <a> pour le téléchargement du PDF. Il faut que son texte soit visible ou au moins donner une largeur/hauteur fixe s’il n’y a qu’une image de fond (sinon, rien ne s’affichera).

De plus, .uploadCv et .sendEmail utilisent la même image (tu devrais sans doute mettre une icône email pour .sendEmail et une icône “download” pour .uploadCv).

3. .container_mobile
Est bien cachée en desktop, apparait correctement en mobile, pas de souci de ce côté.

4. Selecteurs NAV
Pas de problème visible, mais attention à ne pas mélanger .nav_link.active et #cv.active (préfère des classes, pas des id pour ce genre d’interaction JavaScript !).

Tes effets de hover sont OK.

5. Responsivité
Les parties sous @media semblent correctes.

6. Point important visibilité de la modale
Quand ta modale s’ouvre, le bouton de fermeture (.closeModalCvBtn) doit obligatoirement être visible et avoir une image de fond définie (ex : bouton retour ou X).

Ton code HTML (proche de ceci) doit ressembler à :

xml
<div class="modalCv" style="display:none;">
  <a class="uploadCv" href="...pdf" download>Télécharger CV</a>
  <a class="sendEmail" href="mailto:...">Mail</a>
  <div class="closeModalCvBtn"></div>
</div>
Il faut bien mettre du texte dans les <a> si tu veux qu’un screenreader, ou l’accessibilité, fonctionne correctement.

7. Vérifie l’ordre des règles CSS
Parfois, width: 100% et height: 100% sur .modalCv a peuvent gêner l’affichage (ça va les mettre sur tout l’écran !)

Mieux vaut gérer la largeur/hauteur des boutons séparément, pas sur tous les liens.

8. Exemple de règle CSS pour boutons de la modale :
css
.modalCv a.uploadCv, .modalCv a.sendEmail {
    /* largeur/hauteur carré pour affichage icône seulement */
    display: inline-block;
    width: 4rem;
    height: 4rem; 
    background-repeat: no-repeat;
    background-size: contain;
    text-indent: -9999px; /* si tu ne veux pas voir le texte mais le laisser pour accessibilité */
    border: none;
}
.modalCv a.uploadCv { background-image: url(../img/download.png); }
.modalCv a.sendEmail { background-image: url(../img/email.png); }
Résumé/CHECK-LIST RAPIDE POUR FONCTIONNEMENT PARFAIT
.modalCv : display: none; par défaut + passer à display: flex; côté JS à l’ouverture.

.modalCv : flex-direction: column; align-items: center; justify-content: center;.

Les boutons <a> d’action ont une largeur/hauteur fixée, une image de fond (download/email), un texte pour accessibilité (caché si besoin), et pas de width: 100%/height: 100% dessus.

Le bouton de fermeture (.closeModalCvBtn) est stylé (icône dans le fond).

Conseil JS bonus :
Si la modale ne s’ouvre toujours pas, vérifie dans la console dev du navigateur s’il n’y a pas une erreur JS (class pas trouvée, etc.) lors du clic.

Besoin d’un exemple de structure HTML ou JS précis pour ces modales ? Reposte ton script ou la partie HTML/JS qui résiste !

