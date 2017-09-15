let wKeyPressed = false,
    sKeyPressed = false,
    upKeyPressed = false,
    downKeyPressed = false;

/*
 * Starts our game loop
 */
function start() {
    gameLoop();
}

/*
* Draws/displays our game to the page's canvas
*/
function drawGame() {
    //TO-DO
}

/*
* Updates our game logic such as collision detection and game controls
*/
function updateGame() {
    //TO-DO
}

/*
* Moves our paddles if the player holds down the correct keys
*/
function controls() {
    //TO-DO
}

/*
* Resets our ball to a default position, i.e. if a player misses their pass
*/
function resetBall() {
    //TO-DO
}

/*
* The game loop. It calls the built-in function requestAnimationFrame to call gameLoop (itself) every 1/60 second,
* in other words, 60 frames per second.
*/
function gameLoop() {
    drawGame();
    updateGame();
    requestAnimationFrame(gameLoop);
}

//TO-DO keydown & keyup event listeners

start();