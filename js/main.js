const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
// dichiaro una variabile indice per il carosello
let slideIndex = 0;

// dichiaro una variabile che mi conterrà la lunghezza totale dell'array images
const totalImages = images.length;

// recupero tutti gli elementi del DOM che mi serviranno per il funzionamento del carosello
const items = document.querySelector('.items');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const showSlide = (index) => {
    // recupero le info dall'array 
    const image = images[index].image;
    const title = images[index].title;
    const text = images[index].text;
    
    // inietto l'html con le info dell'array nel div items
    items.innerHTML = 
    `<div class="item active">
        <img src="./${image}" alt="${title}">
        <div class="position-absolute bottom-50 text-right color-white padding-text">
            <h2 id="slide-title">${title}</h2>
            <h5 id="slide-text">${text}</h5>
        </div>
    </div>`;

    // appendo di nuovo i tasti per cambiare immagine
    items.appendChild(prev);
    items.appendChild(next);
};

prev.addEventListener('click',() => {
    // decremento dell'indice del carosello
    slideIndex = (slideIndex - 1 + totalImages) % totalImages;

    // richiamo la funzione showSlide
    showSlide(slideIndex);
});

next.addEventListener('click', () => {
    // incremento dell'indice del carosello
    slideIndex = (slideIndex + 1) % totalImages;

    // richiamo la funzione showSlide
    showSlide(slideIndex);
});