const pageImage = document.querySelector('.pageimage');
const body = document.querySelector('body');
/*const zoomed = document.querySelector('.zoomed');*/
const travelLayout = document.querySelector('.travellayout');
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);


/*pour afficher l'ensemble des images avec une taille aléatoire dans la page*/
for (let i = 1; i<=14; i++){
let sizeArray = [12, 14, 16, 18, 20];
var randomItem = sizeArray[Math.floor(Math.random()*sizeArray.length)];
const newImage = document.createElement('img');
newImage.setAttribute('src', 'image/travels/thailand/thai'+ i +'.JPG');
newImage.setAttribute('class', 'thaiImage');
newImage.setAttribute('width', randomItem + '%');
newImage.setAttribute('height', randomItem + '%');
newImage.setAttribute('id', 'IMG' + i);
pageImage.appendChild(newImage);
document.getElementById('IMG' + i).addEventListener('click', zoomIn);

 function zoomIn() {
    let ratio = newImage.Height/newImage.width;
    let zoomH = vh*0.75;
    let zoomW = zoomH/ratio;
    const divZoomed = document.createElement('div')
    pageImage.appendChild(divZoomed);
    divZoomed.setAttribute('class', 'zoomed')
    const zoomedImage = document.createElement('img');
    zoomedImage.setAttribute('src', 'image/travels/origin/bthai'+ i +'.JPG');
    zoomedImage.setAttribute('class', 'BTHAI');
    zoomedImage.setAttribute('id', 'BTHAI' + i);
    zoomedImage.setAttribute('width', zoomW);
    zoomedImage.setAttribute('height', zoomH);
    divZoomed.appendChild(zoomedImage);
    }
}
