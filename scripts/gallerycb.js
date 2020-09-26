const pageImage = document.querySelector('.pageimage');
const body = document.querySelector('body');
const divZoomed = document.querySelector('.hidden');
const X = document.querySelector('.X');
const rArrow = document.querySelector('.rarrow');
const lArrow = document.querySelector('.larrow');
const zoomedImage = document.querySelector('.zoomedImage')
const image = document.querySelectorAll('.image')
/*const index = [1,2,3,4,5,6,7,8,9,10,11,12];*/
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
/* essaie de creer un tableau */
/*const image = 12;*/
/*const images = [{vignette: 'image/travels/cabin/cab1.JPG', big: 'image/travels/cabin/ocab1.JPG'},
                {vignette: 'image/travels/cabin/cab2.JPG', big: 'image/travels/cabin/ocab2.JPG'},
                {vignette: 'image/travels/cabin/cab3.JPG', big: 'image/travels/cabin/ocab3.JPG'},
                {vignette: 'image/travels/cabin/cab4.JPG', big: 'image/travels/cabin/ocab4.JPG'},
                {vignette: 'image/travels/cabin/cab5.JPG', big: 'image/travels/cabin/ocab5.JPG'},
                {vignette: 'image/travels/cabin/cab6.JPG', big: 'image/travels/cabin/ocab6.JPG'},
                {vignette: 'image/travels/cabin/cab7.JPG', big: 'image/travels/cabin/ocab7.JPG'},
                {vignette: 'image/travels/cabin/cab8.JPG', big: 'image/travels/cabin/ocab8.JPG'},
                {vignette: 'image/travels/cabin/cab9.JPG', big: 'image/travels/cabin/ocab9.JPG'},
                {vignette: 'image/travels/cabin/cab10.JPG', big: 'image/travels/cabin/ocab10.JPG'},
                {vignette: 'image/travels/cabin/cab11.JPG', big: 'image/travels/cabin/ocab11.JPG'},
                {vignette: 'image/travels/cabin/cab12.JPG', big: 'image/travels/cabin/ocab12.JPG'},]*/


/* pour afficher l'ensemble des images avec une taille aléatoire dans la page */
/*for (let i = 1; i<=12; i++){
    const vignette = document.getElementById(`cab${i}`);
    let sizeArray = [12, 14, 16, 18, 20];
    const randomItem = sizeArray[Math.floor(Math.random()*sizeArray.length)];
    vignette.setAttribute('width', randomItem + '%');
    vignette.setAttribute('height', randomItem + '%');
}*/
X.addEventListener('click', zoomOut);
rArrow.addEventListener('click', next);
for (let i=0; i<=11; i++){
    image[i].addEventListener('click', placeZoomed);
}

/*for (let i = 1; i<=12; i++) {
    let vignette = document.createElement('img');
    vignette.setAttribute('src',`image/travels/cabin/cab${i}.JPG`)
    vignette.setAttribute('data-index', i)
    vignette.setAttribute('class', 'image')
    vignette.setAttribute('width', '301');
    vignette.setAttribute('height', '201');
    pageImage.appendChild(vignette);
    vignette.addEventListener('click', placeZoomed);
}*/

/* fonction pour creer l'image zoomee de la vignette qui a ete clickee */
function placeZoomed(e) {
    let Index = e.target.dataset.index
    divZoomed.setAttribute('class', 'show');
    let ratio = 0.66;
    let zoomH = vh*0.75;
    let zoomW = zoomH/ratio;
    zoomedImage.setAttribute('src', `image/travels/cabin/ocab${Index}.JPG`);
    zoomedImage.setAttribute('width', zoomW);
    zoomedImage.setAttribute('height', zoomH);
}

function zoomOut () {
    divZoomed.setAttribute('class', 'hidden');
}

function next () {
    console.log(image);
    let indexNext = image[0].dataset.index;
    parseInt(indexNext, 10);
    indexNext += indexNext;
    console.log(indexNext);
    zoomedImage.setAttribute('src', `image/travels/cabin/ocab${indexNext}.JPG`);
}