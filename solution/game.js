const W_KEY = 87;
const S_KEY = 83;
const UP_KEY = 38;
const DOWN_KEY = 40;
const PADDLE_SPEED = 5;

let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");

let paddle1 = new Paddle(0, canvas.height/2, 20, 100),
    paddle2 = new Paddle(canvas.width - 20, canvas.height/2, 20, 100),
    ball = new Ball(canvas.width/2, 0, 10);

let wKeyPressed = false,
    sKeyPressed = false,
    upKeyPressed = false,
    downKeyPressed = false;


/*
 * Starts our game loop, requestAnimationFrame will call our gameLoop function every 1/60 second
 */
function start() {
    gameLoop();
}

function drawGame() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    paddle1.draw(context);
    paddle2.draw(context);
    ball.draw(context);
}

function updateGame() {
    ball.update();

    //Check if the ball hits the left player paddle
    if(ball.x < paddle1.x + paddle1.width &&
       ball.x + ball.radius > paddle1.x &&
       ball.y < paddle1.y + paddle1.height &&
       ball.y + ball.radius > paddle1.y) {
         ball.velocityX = -ball.velocityX;
         ball.velocityY = -ball.velocityY;

        /*
        //a more accurate attempt to bounce the ball based on the angle it hits the paddle
        let intersectY = (paddle1.y+(paddle1.height))-ball.y;
        let normalPaddleIntersect = (intersectY/(paddle1.height));
        let bounceAngle = normalPaddleIntersect * (5*Math.PI)/12;
        ball.velocityX = 5 * Math.cos(bounceAngle);
        ball.velocityY = 5 * -Math.sin(bounceAngle);
        */

     }

    //Check if the ball hits the right player paddle
    if(ball.x < paddle2.x + paddle2.width &&
       ball.x + ball.radius > paddle2.x &&
       ball.y < paddle2.y + paddle2.height &&
       ball.y + ball.radius > paddle2.y) {
         ball.velocityX = -ball.velocityX;
         ball.velocityY = -ball.velocityY;
     }

     //Now we check if the ball hits upper or lower walls
     if(ball.y >= canvas.height || ball.y <= 0) {
         ball.velocityY = -ball.velocityY;
     }

     if(ball.x + ball.radius >= canvas.width || ball.x <= 0) {
         resetBall();
     }

     controls();
}

function controls() {
    if(wKeyPressed) {
        paddle1.y -= PADDLE_SPEED;
    }
    if(sKeyPressed) {
        paddle1.y += PADDLE_SPEED;
    }
    if(upKeyPressed) {
        paddle2.y -= PADDLE_SPEED;
    }
    if(downKeyPressed) {
        paddle2.y += PADDLE_SPEED;
    }
}

function resetBall() {
    ball.x = canvas.width/2;
    ball.y = 0;
}

function gameLoop() {
    drawGame();
    updateGame();
    requestAnimationFrame(gameLoop);
}

window.addEventListener("keydown", function(event) {
    if(event.keyCode == W_KEY) {
        wKeyPressed = true;
    }
    else if(event.keyCode == S_KEY) {
        sKeyPressed = true;
    }
    else if(event.keyCode == UP_KEY) {
        upKeyPressed = true;
    }
    else if(event.keyCode == DOWN_KEY) {
        downKeyPressed = true;
    }
});

window.addEventListener("keyup", function(event) {
     if(event.keyCode == W_KEY) {
        wKeyPressed = false;
    }
    else if(event.keyCode == S_KEY) {
        sKeyPressed = false;
    }
    else if(event.keyCode == UP_KEY) {
        upKeyPressed = false;
    }
    else if(event.keyCode == DOWN_KEY) {
        downKeyPressed = false;
    }
});

start();