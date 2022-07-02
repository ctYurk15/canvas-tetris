const canvas = document.querySelector('canvas');
const scoreTables = document.querySelectorAll(".score-text");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const engine = new Engine(canvas, 'rgb(200, 255, 255)');
const cube = new Rectangle(50, 50, 50, 50, 'lime');

engine.addObject(cube);

engine.start();
let animation_frame;
function loop()
{
    animation_frame = requestAnimationFrame(loop);
    engine.render();
}

loop();