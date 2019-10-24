let screenWidth = window.innerWidth - 15;
let screenHeight = window.innerHeight - 20;
let canvasContainer = document.getElementById("canvasContainer");
let newCanvas = document.createElement("canvas");
newCanvas.id = "canvas";
newCanvas.width = screenWidth;
newCanvas.height = screenHeight;
canvasContainer.appendChild(newCanvas);
