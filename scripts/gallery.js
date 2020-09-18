const pageImage = document.querySelector('.pageimage');
const zoomed = document.querySelector('.zoomed');
const travelLayout = document.querySelector('.travellayout');
/*const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)*/


/*pour afficher l'ensemble des images avec une taille aléatoire dans la page*/
for (let i = 1; i<=14; i++){
let sizeArray = [12, 14, 16, 18, 20] /*22, 24, 26, 28, 30, 32, 34]'*/;
var randomItem = sizeArray[Math.floor(Math.random()*sizeArray.length)];
/*let wratio= 50;
let hratio= 50;*/
const newImage = document.createElement('img');
newImage.setAttribute('src', 'image/travels/thailand/thai'+ i +'.JPG');
newImage.setAttribute('class', 'thaiImage');
newImage.setAttribute('width', randomItem + '%');
newImage.setAttribute('height', randomItem + '%');
newImage.setAttribute('id', 'IMG' + i);
pageImage.appendChild(newImage);
document.getElementById('IMG' + i).addEventListener('click', zoomIn);
var heightO = newImage.height;
var widthO = newImage.width;
var zoomH = heightO*10;
var zoomW = widthO*10;
 function zoomIn() {
     zoomH;
     zoomW;
     const zoomedImage = document.createElement('img');
    zoomedImage.setAttribute('src', 'image/travels/origin/bthai'+ i +'.JPG');
    zoomedImage.setAttribute('class', 'BTHAI');
    zoomedImage.setAttribute('id', 'BTHAI' + i);
    zoomedImage.setAttribute('width', zoomW);
    zoomedImage.setAttribute('height', zoomH);
    zoomed.appendChild(zoomedImage);
    }
}

/*function popUp() {
    
    let params = 'width=600,height=300,left=360,top=240';

window.open('image/travels/origin/bthai' + i +'.JPG', 'test', params);
}
}*/