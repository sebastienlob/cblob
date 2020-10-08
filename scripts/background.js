const canvas = document.querySelector('.background');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
document.addEventListener('mousemove', follow);

function follow(e) {
    let posX = 0;
    let posY = 0;
    posX= e.pageX;
    posY= e.pageY;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 40; i++) {
        
        //pointsC[i].pointDraw();
        //pointsB[i].pointDraw();
        //pointsB[i].mouvement();
        segmentsB[i].segDraw();
        segmentsB[i].mouvementSeg();
        //pointsC[i].mouvement();
    }
}
class Point {
    constructor(x, y, tx, ty, rayon, color) {
        this.x = x;
        this.y = y;
        this.tx = tx;
        this.ty = ty;
        this.rayon = rayon;
        this.color = color;
    }
    /*pointDraw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rayon, 0, 2*Math.PI);
        ctx.fill();
    }
    mouvement() {
        if (this.x>=width) {
            this.tx = -(this.tx);
        }
        if (this.x<=0) {
            this.tx = -(this.tx);
        }
        if (this.y>=width) {
            this.ty = -(this.ty);
        }
        if (this.y<=0) {
            this.ty = -(this.ty);
        }
        this.x += this.tx;
        this.y += this.ty;
    }*/
}

class Segment {
    constructor (x, y, tx, ty, xNext, txNext, yNext, tyNext, color) {
        this.x = x;
        this.y = y;
        this.tx = tx;
        this.ty = ty;
        this.xNext = xNext;
        this.yNext = yNext;
        this.txNext = txNext;
        this.tyNext = tyNext;
        this.color = color;
    }
    segDraw() {
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.xNext, this.yNext);
        ctx.stroke();
    }
    mouvementSeg() {
        if ((this.x + this.xNext)>=width) {
            this.tx = -(this.tx);
        }
        if ((this.x + this.xNext) <=0) {
            this.tx = -(this.tx);
        }
        if ((this.y + this.yNext) >=width) {
            this.ty = -(this.ty);
        }
        if ((this.y + this.yNext) <=0) {
            this.ty = -(this.ty);
        }
        this.x += this.tx;
        this.txNext += this.tx;
        this.y += this.ty;
        this.tyNext += this.ty;
        }
    }   
let pointsB = [];
while (pointsB.length <= 40) {
    let x = rand(0, width, 6);
    let y = rand(0, height, 6);
    let rayon = randomNum(2, 6);
    let color = 'rgba(255,255,255,0.15)';
    let tx = randomNum(-6, 6);
    let ty = randomNum(-6, 6);
    let pointB = new Point (
        x,
        y,
        tx,
        ty,
        rayon,
        color
    );
    pointsB.push(pointB);
}

let segmentsB = [];
for(let i=0; i<=39; i++) {
    let x = pointsB[i].x;
    let y = pointsB[i].y;
    let xNext = pointsB[i+1].x;
    let yNext = pointsB[i+1].y;
    let color = 'rgba(255,255,255,0.15)';
    let tx = pointsB[i].tx;
    let ty = pointsB[i].ty;
    let txNext = pointsB[i+1].tx;
    let tyNext = pointsB[i+1].ty;

    let segmentB = new Segment (
        x,
        y,
        tx,
        ty,
        xNext,
        yNext,
        txNext,
        tyNext,
        color
    )
    segmentsB.push(segmentB);
}

/*function move() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < 40; i++) {
        //pointsC[i].pointDraw();
        //pointsB[i].pointDraw();
        //pointsB[i].mouvement();
        segmentsB[i].segDraw();
        segmentsB[i].mouvementSeg();
        //pointsC[i].mouvement();
    }
    requestAnimationFrame(move)
}
*/
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

