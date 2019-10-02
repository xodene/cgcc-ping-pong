class Ball {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velocityX = 4;
        this.velocityY = 4;
    } 

    draw(context) {
        context.beginPath();
        context.fillStyle = "red";
        context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
        context.fill();
        context.closePath();
    }

    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
}