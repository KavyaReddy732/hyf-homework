let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d'); 
const randomColor = Math.floor(Math.random()*16777215).toString(16);
function randomColor()
{   
    color='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
    return color;
}
class Circle {
    constructor(startAngle, endAngle){
        this.x = Math.floor(Math.random()*300);
        this.y = Math.floor(Math.random()*300);
        this.r = Math.floor(Math.random()*20);
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = getRandomColor();
    }
    draw(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, this.startAngle,this.endAngle);
        ctx.fillStyle = this.fillColor;
        ctx.fill()
        ctx.stroke();
    }
}
const c1 = new Circle( 0, 2 * Math.PI );
const c2 = new Circle(0,2 * Math.PI)

setInterval(() => {
    new Circle(0,2 * Math.PI).draw()
}, 100);
// canvas.addEventListener("mousemove",()=>{
//     setInterval(() => {
//     new Circle(0,2 * Math.PI).draw()
// }, 1000);
// })