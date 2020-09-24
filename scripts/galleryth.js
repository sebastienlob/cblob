const pageImage = document.querySelector('.pageimage');
const body = document.querySelector('body');
const divZoomed = document.querySelector('.zoomed');
const zoomedImage = document.querySelector('.BTHAI');
const X = document.querySelector('.X');
const rArrow = document.querySelector('.rarrow')
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
divZoomed.style.visibility = 'hidden';

/* fonction pour zoomer l'image qui a été clickée */
function zoomIn (e) {
    const newImage = e.currentTarget;
    var zoomedSrc = e.currentTarget.dataset.bigurl;
    divZoomed.style.visibility = 'visible';
    let ratio = newImage.Height/newImage.width;
    let zoomH = vh*0.75;
    let zoomW = zoomH/ratio;
    zoomedImage.setAttribute('src', zoomedSrc);
    zoomedImage.setAttribute('width', zoomW);
    zoomedImage.setAttribute('height', zoomH);
    X.setAttribute('src', 'image/travels/thailand/X2.png')
    rArrow.setAttribute('src', 'image/travels/thailand/rarrow.png');
    divZoomed.appendChild(zoomedImage);
    divZoomed.appendChild(X);
    X.addEventListener('click', quitZoom);
    rArrow.addEventListener('click', scrollRight);
    }

/* fonction pour fermer l'image zoomée */
function quitZoom (){
    divZoomed.style.visibility = 'hidden';
}

/* fonction pour faire deffiler les images vers la droite */

function scrollRight () {
    var zoomedSrcPart = 'image/travels/thailand/othai';
    var zoomedSrc = zoomedImage.src;
    console.log(zoomedSrc);
    var j = zoomedSrc.slice(47,49);
    var k = parseInt(j, 10);
    if (k<=9){
        var i = k+1;
        var zoomedNext = zoomedSrcPart + i + '.JPG';
        zoomedImage.setAttribute('src', zoomedNext);
        divZoomed.appendChild(zoomedImage);
    } else if (k>=10 && k<14){
        var l = zoomedSrc.slice(47,49);
        var m = parseInt(l, 10);
        var n = m+1;
        if (n>=10 && n<14) {
        var zoomedNext = zoomedSrcPart + n + '.JPG';
        zoomedImage.setAttribute('src', zoomedNext);
        divZoomed.appendChild(zoomedImage);
        }else {
        zoomedImage.setAttribute('src', 'image/travels/thailand/othai1.JPG');
        divZoomed.appendChild(zoomedImage);
        }
    }
}

/* pour afficher l'ensemble des images avec une taille aléatoire dans la page */
for (let i = 1; i<=14; i++){
    let sizeArray = [12, 14, 16, 18, 20];
    var randomItem = sizeArray[Math.floor(Math.random()*sizeArray.length)];
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'image/travels/thailand/thai'+ i +'.JPG');
    newImage.setAttribute('data-bigurl', 'image/travels/thailand/othai'+ i +'.JPG');
    newImage.setAttribute('class', 'image');
    newImage.setAttribute('width', randomItem + '%');
    newImage.setAttribute('height', randomItem + '%');
    /*newImage.setAttribute('id', 'IMG' + i);*/
    pageImage.appendChild(newImage);
    newImage.addEventListener('click', zoomIn);
}


