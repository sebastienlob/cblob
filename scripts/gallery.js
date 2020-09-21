const pageImage = document.querySelector('.pageimage');
const body = document.querySelector('body');
const divZoomed = document.querySelector('.zoomed');
const zoomedImage = document.querySelector('.BTHAI');
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
divZoomed.style.visibility = 'hidden';

/* fonction pour zoomer l'image qui a été clickée */
function zoomIn (e) {
    const newImage = e.currentTarget;
    var zoomedSrc = e.currentTarget.dataset.bigurl;
    console.log(zoomedSrc)
    divZoomed.style.visibility = 'visible';
    let ratio = newImage.Height/newImage.width;
    let zoomH = vh*0.75;
    let zoomW = zoomH/ratio;
    zoomedImage.setAttribute('src', zoomedSrc);
    zoomedImage.setAttribute('width', zoomW);
    zoomedImage.setAttribute('height', zoomH);
    divZoomed.appendChild(zoomedImage);
    }


/* pour afficher l'ensemble des images avec une taille aléatoire dans la page */
for (let i = 1; i<=14; i++){
    let sizeArray = [12, 14, 16, 18, 20];
    var randomItem = sizeArray[Math.floor(Math.random()*sizeArray.length)];
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'image/travels/thailand/thai'+ i +'.JPG');
    newImage.setAttribute('data-bigurl', 'image/travels/thailand/othai'+ i +'.JPG');
    newImage.setAttribute('class', 'thaiImage');
    newImage.setAttribute('width', randomItem + '%');
    newImage.setAttribute('height', randomItem + '%');
    newImage.setAttribute('id', 'IMG' + i);
    pageImage.appendChild(newImage);
    newImage.addEventListener('click', zoomIn);
}


