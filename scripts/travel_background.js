const canvas = document.querySelector('.backgroundTravel');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
document.addEventListener('mousemove', reveal);

function reveal(e) {
    let posX = posY = 0;
    posX= e.pageX;
    posY= e.pageY;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.strokeRect(posX, posY, 100, 100);  
}