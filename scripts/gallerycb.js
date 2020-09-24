const pageImage = document.querySelector('.pageimage');
const body = document.querySelector('body');
const divZoomed = document.querySelector('.zoomed');
const zoomedImage = document.querySelector('.CAB');
const X = document.querySelector('.X');
const rArrow = document.querySelector('.rarrow')
const lArrow = document.querySelector('.larrow')
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
    X.setAttribute('src', 'image/travels/cabin/X2.png')
    rArrow.setAttribute('src', 'image/travels/cabin/rarrow.png')
    lArrow.setAttribute('src', 'image/travels/cabin/larrow.png')
    divZoomed.appendChild(zoomedImage);
    X.addEventListener('click', quitZoom);
    rArrow.addEventListener('click', scrollRight);
    lArrow.addEventListener('click', scrollLeft);
    }

/* fonction pour fermer l'image zoomée */
function quitZoom (){
    divZoomed.style.visibility = 'hidden';
}

/* fonction pour faire defiler les images vers la droite */

function scrollRight () {
    var zoomedSrcPart = 'image/travels/cabin/ocab';
    var zoomedSrc = zoomedImage.src;
    /*var j = zoomedSrc.slice(63,65);*/
    var j = zoomedSrc.slice(43,45);
    console.log(j);
    var k = parseInt(j, 10);
    console.log(k);
    if (k<=9){
        var i = k+1;
        var zoomedNext = zoomedSrcPart + i + '.JPG';
        zoomedImage.setAttribute('src', zoomedNext);
        divZoomed.appendChild(zoomedImage);
    } else if (k>=10 && k<13){
        var l = zoomedSrc.slice(43,45);
        var m = parseInt(l, 10);
        var n = m+1;
        if (n>=10 && n<13) {
        var zoomedNext = zoomedSrcPart + n + '.JPG';
        zoomedImage.setAttribute('src', zoomedNext);
        divZoomed.appendChild(zoomedImage);
        }else {
        zoomedImage.setAttribute('src', 'image/travels/cabin/ocab1.JPG');
        divZoomed.appendChild(zoomedImage);
        }
    }
}

/* fonction pour faire defiler les images vers la gauche */

function scrollLeft () {
    var zoomedSrcPart = 'image/travels/cabin/ocab';
    var zoomedSrc = zoomedImage.src;
    var j = zoomedSrc.slice(43,45);
    var k = parseInt(j, 10);
    if (k<=1){
        zoomedImage.setAttribute('src', 'image/travels/cabin/ocab12.JPG');
        divZoomed.appendChild(zoomedImage);
    } else if (k >1 && k<=12){
        var l = zoomedSrc.slice(43,45);
        var m = parseInt(l, 10);
        var n = m-1;
        var zoomedNext = zoomedSrcPart + n + '.JPG';
        zoomedImage.setAttribute('src', zoomedNext);
        divZoomed.appendChild(zoomedImage);
        }else {
        zoomedImage.setAttribute('src', 'image/travels/cabin/ocab1.JPG');
        divZoomed.appendChild(zoomedImage);
        }
    }

/* pour afficher l'ensemble des images avec une taille aléatoire dans la page */
for (let i = 1; i<=12; i++){
    let sizeArray = [12, 14, 16, 18, 20];
    var randomItem = sizeArray[Math.floor(Math.random()*sizeArray.length)];
    const newImage = document.createElement('img');
    newImage.setAttribute('src', 'image/travels/cabin/cab'+ i +'.JPG');
    newImage.setAttribute('data-bigurl', 'image/travels/cabin/ocab'+ i +'.JPG');
    newImage.setAttribute('class', 'image');
    newImage.setAttribute('width', randomItem + '%');
    newImage.setAttribute('height', randomItem + '%');
    pageImage.appendChild(newImage);
    newImage.addEventListener('click', zoomIn);
}