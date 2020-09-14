const pageImage = document.querySelector('.pageimage');
/*const styleTravel = document.createElement('style')
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)*/



for (let i = 1; i<=14; i++){
let sizeArray = [20, 25, 30, 35, 40, 45];
var randomItem = sizeArray[Math.floor(Math.random()*sizeArray.length)];
const newImage = document.createElement('img');
newImage.setAttribute('src', 'image/travels/thailand/IMG'+ i +'.JPG');
newImage.setAttribute('width', randomItem + '%');
newImage.setAttribute('height', randomItem + '%');
pageImage.appendChild(newImage);
}