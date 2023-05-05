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
    
    // inserire elementi HTML con template literal (class item = nascosto)
    itemContainer.innerHTML +=
    `<div class="item">
        <img src="${images[i]}" alt="image">
    </div>`;
}

console.log(itemContainer);

// inserire classe active al div dell'immagine visibile
let activePosition = 0;

const itemContainerList = document.getElementsByClassName("item");
itemContainerList[activePosition].classList.add("active");
console.log(itemContainerList);


/* MILESTONE 3 */

// CONSEGNA
// Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

    /* BONUS 1 */

    // Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l’utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

// SVILUPPO CONSEGNA

// selezionare i buttons
const buttonDown = document.getElementById("buttonDown");
const buttonUp = document.getElementById("buttonUp");

// attivare l'evento 'click' per il buttonDown
buttonDown.addEventListener("click",
    
    function () {

        if (activePosition == images.length - 1) {
            //reset activePosition
            activePosition = 0;
            
        } else {
            //incrementare il valore di activePosition
            activePosition++;
        }

        //rimuovere la classe active dall'item attuale
        document.querySelector(".item.active").classList.remove("active");
        //assegnare la classe active all'item successivo
        itemContainerList[activePosition].classList.add("active");

    }
);

// attivare l'evento 'click' per il buttonUp
buttonUp.addEventListener("click",
    
    function () {

        if (activePosition == 0) {
            //reset activePosition
            activePosition = images.length - 1;
            
        } else {
            //incrementare il valore di activePosition
            activePosition--;
        }

        //rimuovere la classe active dall'item attuale
        document.querySelector(".item.active").classList.remove("active");
        //assegnare la classe active all'item successivo
        itemContainerList[activePosition].classList.add("active");

    }
);
    
    



/* BONUS 2 */
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

