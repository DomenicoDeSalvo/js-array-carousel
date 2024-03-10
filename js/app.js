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
//Acquisizione del contenitore.
const picClassElement = document.querySelector('.pic'); //Element | Null
//Attribuzione della classe.
picClassElement.classList.add('shown')