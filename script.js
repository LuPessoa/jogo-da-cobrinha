let canvas = document.getElementById("sanke");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";

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
function iniciarJogo(){
    criarBG();
criarCobrinha();

    let snakeX = snake[0] . x;
    let snakeY = sanke[0] . y;
     
    if(direction == "right") snakex += box;
    if(direction == "left") snakex -= box;
    if(direction == "up" snakey -= box);
    if(direction == "down" sankey += box);


    snake.pop();

    let newHead = {
        x: snakex,
        y:snakey
    }
    snake.unshift(newHead);
}
let jogo = setInterval(iniciarJogo, 100);

