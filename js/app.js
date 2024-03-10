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
//Acquisizion elemento "prewievs_Album"
const prewievsAlbumElement = document.querySelector('.prewievs_slider'); //Element | Null
//Creazione variabili da inserire nel HTML
let picItem = ''; //String   
let prewievItem = ''; //String

//Creazione ciclo per assegnare le immagini.
for(let i = 0; i < pathsArray.length; i++) {

    const imagePath = pathsArray[i]; //String
    //Creazione variabile a cui si assegna la stringa con annessa immagine.
    const albumItem = `
    <div class="pic">
        <img src="${imagePath}">
    </div> 
    `; //Element

    const prewievPath = pathsArray[i]; //String
    //Creazione variabile a cui si assegna la stringa con annessa immagine.
    const prewievsAlbumItem = `
    <div class="prewiev layer">
        <img src="${prewievPath}">
    </div> 
    `; //Element

    //albumItem viene associata a picItem per poter portare la stringa fuori dal ciclo FOR.
    picItem += albumItem;
     //prewievAlbumItem viene associata a prewievItem per poter portare la stringa fuori dal ciclo FOR.
     prewievItem += prewievsAlbumItem;
}
//Inclusione nel DOM delle immagini.
albumElement.innerHTML = picItem;
prewievsAlbumElement.innerHTML += prewievItem;

//Cambio delle classi dei contenitori immagini a seconda del fatto che debbano essere mostrati o meno. Nella prewiev l'immagine mostrata non ha il layer.
//Acquisizione dei contenitori.
const picClassList = document.getElementsByClassName('pic'); //Element | Null
const prewievClassList = document.getElementsByClassName('prewiev'); //Element | Null

//Dichiarazione della variabile corrispondente alla posizione del contenitore mostrato nell'array.
let picShownIndex = 0;//Number
let prewievShownIndex = picShownIndex;//Number

//Attribuzione della classe al primo elemento della lista. Rimozione della classe layer dalla prewiev selezionata.
picClassList[picShownIndex].classList.add('shown');
prewievClassList[picShownIndex].classList.remove('layer');

//Al click sulle frecce, l'immagine mostrata dovrà cambiare.
//Acquisizione bottoni.
const upElement = document.querySelector('.up');
const downElement = document.querySelector('.down');
 
// Assegnazione comando al bottone 'up'.
upElement.addEventListener('click', function() {
    if(picShownIndex > 0) {

        //La classe shown viene tolta dal contenitore attuale mentre classe layer viene rimessa.
        picClassList[picShownIndex].classList.remove('shown');
        prewievClassList[picShownIndex].classList.add('layer');

        //Succede l'opposto all'immagine precedente.
        picShownIndex--;//Number
        picClassList[picShownIndex].classList.add('shown');
        prewievClassList[picShownIndex].classList.remove('layer');

    } else {
        //Creazione ciclo perpetuo.
        picClassList[picShownIndex].classList.remove('shown');
        prewievClassList[picShownIndex].classList.add('layer');

        picShownIndex = picClassList.length - 1; //number
        picClassList[picShownIndex].classList.add('shown');
        prewievClassList[picShownIndex].classList.remove('layer');


    }


})

// Assegnazione comando al bottone 'down'.
downElement.addEventListener('click', function() {
    if(picShownIndex < picClassList.length - 1) {

        //La classe shown viene tolta dal contenitore attuale mentre classe layer viene rimessa.
        picClassList[picShownIndex].classList.remove('shown');
        prewievClassList[picShownIndex].classList.add('layer');

        //Succede l'opposto all'immagine successiva.
        picShownIndex++;//Number
        picClassList[picShownIndex].classList.add('shown');
        prewievClassList[picShownIndex].classList.remove('layer');

    } else {
        //Creazione ciclo perpetuo.
        picClassList[picShownIndex].classList.remove('shown');
        prewievClassList[picShownIndex].classList.add('layer');

        picShownIndex = 0; //number
        picClassList[picShownIndex].classList.add('shown');
        prewievClassList[picShownIndex].classList.remove('layer');


    }


})