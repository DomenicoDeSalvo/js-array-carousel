//Codice per carosello.

//Array contenente i percorsi alle immagini da utilizzare.

const pathsArray = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
]; //Array

//Acquisizione elemento "album".
const albumElement = document.querySelector('.album'); //Element | Null
//Creazione variabile da inserire nel HTML
let picItem = ''; //String   

//Creazione ciclo per assegnare le immagini.
for(let i = 0; i < pathsArray.length; i++) {

    const imagePath = pathsArray[i]; //String
    //Creazione variabile a cui si assegna la stringa con annessa immagine.
    const albumItem = `
    <div class="pic">
        <img src="${imagePath}">
    </div> 
    `; //Element

    //albumItem viene associata a picItem per poter portare la stringa fuori dal ciclo FOR.
    picItem += albumItem;
}
//Inclusione nel DOM delle immagini.
albumElement.innerHTML = picItem;

//Cambio delle classi dei contenitori immagini a seconda del fatto che debbano essere mostrati o meno.
//Acquisizione dei contenitori.
const picClassList = document.getElementsByClassName('pic'); //Element | Null
//Dichiarazione della variabile corrispondente alla posizione del contenitore mostrato nell'array.
let picShownIndex = 0;//Number
//Attribuzione della classe al primo elemento della lista.
picClassList[picShownIndex].classList.add('shown');

//Al click sulle frecce, l'immagine mostrata dovrà cambiare.
//Acquisizione bottoni.
const upElement = document.querySelector('.up');
const downElement = document.querySelector('.down');
 
// Assegnazione comando al bottone 'up'.
upElement.addEventListener('click', function() {
    if(picShownIndex > 0) {

        //La classe shown viene tolta dal contenitore attuale.
        picClassList[picShownIndex].classList.remove('shown');
        //E viene assegnata al contenitore precedente.
        picShownIndex--;//Number
        picClassList[picShownIndex].classList.add('shown');
    } else {
        //Creazione ciclo perpetuo.
        picClassList[picShownIndex].classList.remove('shown');
        picShownIndex = picClassList.length - 1; //number
        picClassList[picShownIndex].classList.add('shown');

    }


})

// Assegnazione comando al bottone 'down'.
downElement.addEventListener('click', function() {
    if(picShownIndex < picClassList.length - 1) {

        //La classe shown viene tolta dal contenitore attuale.
        picClassList[picShownIndex].classList.remove('shown');
        //E viene assegnata al contenitore precedente.
        picShownIndex++;//Number
        picClassList[picShownIndex].classList.add('shown');
    } else {
        //Creazione ciclo perpetuo.
        picClassList[picShownIndex].classList.remove('shown');
        picShownIndex = 0; //number
        picClassList[picShownIndex].classList.add('shown');

    }


})
