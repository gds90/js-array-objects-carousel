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

// Milestone 1:
// Cliccando sui pulsanti va avanti o indietro. All'ultima immagine ed alla prima non va più avanti

// // FUNZIONI TASTI
// function showItem(index) {
//     const items = document.querySelectorAll('.item');
//     items.forEach(item => item.classList.remove('active'));
//     items[index].classList.add('active');
// }

// function nextSlide() {
//     slideIndex++;
//     showItem(slideIndex);
// };

// function prevSlide() {
//     slideIndex--;
//     showItem(slideIndex);
// };


// // recupero i pulsanti avanti e indietro dall'HTML e gli aggiungo la relativa funzione al click
// const prev = document.querySelector(".prev").addEventListener('click', prevSlide());
// const next = document.querySelector(".next").addEventListener('click', nextSlide());

// recupero il container principale dall'HTML
const itemsContainer = document.querySelector('.items');




// ciclo l'array images per crearmi i div contenenti le info
images.forEach((elem) => { 
    let item = document.createElement('div');

    item.classList.add('item')

    let image = document.createElement('img');
    image.src = `./${elem.image}`;
    let title = document.createElement('h2');
    title.innerText = elem.title;
    let text = document.createElement('h5');
    text.innerText = elem.text;

    item.appendChild(image);
    item.appendChild(title);
    item.appendChild(text);
    
    itemsContainer.appendChild(item);
});


