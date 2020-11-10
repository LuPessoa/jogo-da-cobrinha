let canvas = document.getElementById("sanke");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0. 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i< snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[1].x, snake[1].y, box, box);
    }
}

criarBG();
criarCobrinha();