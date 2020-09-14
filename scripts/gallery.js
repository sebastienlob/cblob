const pageImage = document.querySelector('.pageimage');
for (let i = 1; i<=14; i++){
const newImage = document.createElement('img');
newImage.setAttribute('src', 'image/travels/thailand/IMG'+ i +'.JPG');
pageImage.appendChild(newImage);
}