/* MILESTONE 2 */

// CONSEGNA
// Inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal.

// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. (Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.)

// SVILUPPO CONSEGNA
// creare array
const images = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

const itemContainer = document.getElementById("itemContainer");

// creare ciclo for per passare tutti gli elementi dell'array
for (let i = 0; i < images.length; i++) {
    
    // inserire elementi HTML con template literal
    itemContainer.innerHTML +=
    `<div class="item">
        <img src="${images[i]}" alt="image">
    </div>`;
}

console.log(itemContainer);

let activePosition = 0;

const itemContainerList = document.querySelectorAll("#itemContainer .item");
itemContainerList[activePosition].classList.add("active");
console.log(itemContainerList);
// inserire classi item (nascosto) + active (visibile)

