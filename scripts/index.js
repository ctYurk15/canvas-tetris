const canvas = document.querySelector('canvas');
const scoreTables = document.querySelectorAll(".score-text");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const matrix = new Matrix(canvas, 'rgb(200, 255, 255)', 10, 20);
matrix.setConfig(40, 30, 30);

matrix.addCube(0, 0);
matrix.addCube(3, 5);
matrix.addCube(9, 9);
matrix.addCube(8, 9);
matrix.addCube(5, 5);

matrix.start();
let animation_frame;
function loop()
{
    animation_frame = requestAnimationFrame(loop);
    matrix.render();
}

loop();