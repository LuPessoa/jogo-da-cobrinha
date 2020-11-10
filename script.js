let canvas = document.getElementById("sanke");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y:Math.floor(Math.random() * 15 + 1) * box
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

function drawfood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box)
}

document.addEventListener("keydown", update);

function update (event){
    if(event.keycode == 37 && direction != "right") direction = "left";
    if(event.keycode == 38 && direction != down) direction = "up";
    if(event.keycode == 39 && direction != left) direction = "right";
    if(event.keycode == 40 && direction !"up") direction = "down";

 }
function iniciarJogo(){
     if(snake[0]. > 15 * box && diretion == "right") snake[0]. x = 0;
     if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
     if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
     if(snake[0].y < 0 && direction == "up ") snake[0].y = 16 * box;

    criarBG();
criarCobrinha();
drawfood();

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

