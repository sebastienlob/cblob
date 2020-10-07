const canvas = document.querySelector('.background');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
/*document.addEventListener('mousemove', draw);*/

/*function draw(e) {
    let posX = posY = 0;
    posX= e.pageX - canvas.offsetLeft;
    posY= e.pageY - canvas.offsetTop;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgb(255, 0, 0)';
    ctx.fillRect(posX, posY, 100, 100);
}*/

//move()

class Point {
    constructor(x, y, rayon, color) {
        this.x = x;
        this.y = y;
        this.rayon = rayon;
        this.color = color;
    }
}

let pointsB = [];
while (pointsB.length <= 40) {
    let x = rand(0, width, 13);
    let y = rand(0, height, 13);
    let rayon = randomNum(2, 6);
    let color = 'rgba(255,255,255,0.40)';
    let pointB = new Point (
        x,
        y,
        rayon,
        color
    );
    pointsB.push(pointB)
}

let pointsC = [];
while (pointsC.length <= 40) {
    let x = rand(0, width, 13);
    let y = rand(0, height, 13);
    let rayon = randomNum(2, 6);
    let color = 'rgba(255,255,255,0.15)';
    let pointC = new Point (
        x,
        y,
        rayon,
        color
    );
    pointsC.push(pointC)
}

Point.prototype.pointDraw = function() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rayon, 0, 2*Math.PI);
        ctx.fill();
}

Point.prototype.mouvement = function() {
    this.x = this.x+10;
    this.y = this.y+10;
}




function move () {
ctx.clearRect(0, 0, canvas.width, canvas.height)
for (let i = 0; i < 40; i++) {
    pointsC[i].pointDraw();
    pointsB[i].pointDraw();
    pointsB[i].mouvement();
}
    requestAnimationFrame(move)
}

move()
//fonction pour creer aleatoirement les points fonces dont le rayon sera compris entre 5 et 13px
/*function pointDrawBold() {
    pointB=[];
    for (let i=0; i<=40; i++){
        let rayonB = randomNum(2, 6);
        let xB = rand(0, width, 13);
        let yB = rand(0, height, 13);
        ctx.fillStyle = 'rgba(255,255,255,0.40)';
        ctx.beginPath();
        ctx.arc(xB, yB, rayonB, 0, 2*Math.PI);
        ctx.fill();
        let coordB ={xB,yB,rayonB}
        pointB.push(coordB);
    }
}*/

//fonction qui determine le mouvement des points
function movementPattern() {
    console.log(pointB);
    pointB[0].xB = pointB[0].xB+1;
    pointB[0].yB = pointB[0].yB+1;
    console.log(pointB);
}



//fonction pour tracer les lignes qui relient les points
/*function ligne(i) {
    ctx.strokeStyle = 'rgba(255,255,255,0.40)';
    ctx.beginPath();
    ctx.moveTo(pointB[i].xB, pointB[i].yB);
    ctx.lineTo(pointB[i+1].xB, pointB[i+1].yB);
    ctx.lineTo(pointB[i+2].xB, pointB[i+2].yB);
    ctx.closePath();
    ctx.stroke();

    ctx.strokeStyle = 'rgba(255,255,255,0.15)';
    ctx.beginPath();
    ctx.moveTo(pointC[i].xC, pointC[i].yC);
    ctx.lineTo(pointC[i+1].xC, pointC[i+1].yC);
    ctx.lineTo(pointC[i+2].xC, pointC[i+2].yC);
    ctx.closePath();
    ctx.stroke();
}*/

//fonction qui va creer les mouvements des points
/*function move() {

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i=0; i<=5; i++) {
        ligne(i);
    }
    console.log(pointB[0]);
    let fps = 10;
    setTimeout(function(){
        requestAnimationFrame(move)
    }, 1000/fps);
}*/

//fonction pour donner un nombre aleatoir entre deux valeurs
function randomNum(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

//fonction pour donner un nombre aleatoire entre deux valeurs separe par un interval constant
function rand(min, max, step) {
    var delta,
        range,
        rand;
    if (arguments.length < 2) {
        max = min;
        min = 0;
    }
    if (!step) {
        step = 1;
    }
    delta = max - min;
    range = delta / step;
    rand = Math.random();
    rand *= range;
    rand = Math.floor(rand);
    rand *= step;
    rand += min;
    return rand;
}
