const pageImage = document.querySelector('.pageimage');

for (let i = 1; i<=14; i++){
let sizeArray = [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34];
var randomItem = sizeArray[Math.floor(Math.random()*sizeArray.length)];
const newImage = document.createElement('img');
newImage.setAttribute('src', 'image/travels/thailand/IMG'+ i +'.JPG');
newImage.setAttribute('width', randomItem + '%');
newImage.setAttribute('height', randomItem + '%');
pageImage.appendChild(newImage);
}