function displayPos(){
    setAbsolutePos();
    setRelativePos();
}
function setAbsolutePos(){
    let containerXPos = document.getElementById("container-x-pos");
    containerXPos.innerHTML = event.clientX;
    let containerYPos = document.getElementById("container-y-pos");
    containerYPos.innerHTML = event.clientY;
}
//    Match the mouse position with it's relative pixel position inside the canvas
function setRelativePos(){    
    let canvasBox = document.getElementById("canvas1").getBoundingClientRect();
    
    let realMouseXPos = event.clientX;
    let realMouseYPos = event.clientY;

    let canvasMouseXPos = realMouseXPos - canvasBox.left;
    let canvasMouseYPos = realMouseYPos - canvasBox.top;
    
    document.getElementById("relative-x-pos").innerHTML = canvasMouseXPos;
    document.getElementById("relative-y-pos").innerHTML = canvasMouseYPos;
}

//    Match the mouse position with it's relative pixel position inside the canvas
function getRelativePos(){    
    let canvasPos = document.getElementById("canvas1").getBoundingClientRect();
    let x = event.clientX;
    let y = event.clientY;
    let canvasX = x - canvasPos.left;
    let canvasY = y - canvasPos.top;
    let canvasCoords = [canvasX,canvasY];
//    document.getElementById("relative-y-pos").innerHTML = canvasCoords[0];
    return canvasCoords;
}

function testPaint(){
    if (mouseState === 1){
        let paintCanvas = document.getElementById("canvas1");
        let ctxt = paintCanvas.getContext("2d");
        ctxt.fillStyle = "blue";
        ctxt.fillRect(getRelativePos()[0],getRelativePos()[1],brushSize,brushSize);
    }
}

function drawCircle(){
    if(mouseState === 1){
        let paintCanvas = document.getElementById("canvas1");
        let ctx = paintCanvas.getContext("2d");
        ctx.fillStyle = brushColor;
        ctx.beginPath(); ctx.arc(getRelativePos()[0],getRelativePos()[1],brushSize,0,2*Math.PI);
        ctx.fill();
    }
}
    

var mouseState = 0;

function mouseDown(){
    mouseState = 1;
}

function mouseUp(){
    mouseState = 0;
};

var brushSize = 5;
var brushColor = "rgba(0,0,0,1)";

function setBrushSize(){
    let size = document.getElementById("brush-size-menu");
    brushSize = size.value;
    document.getElementById("brush-size-display").innerHTML = brushSize; 
}

function setBrushColor(){
    let color = document.getElementById("brush-color-menu");
    brushColor = color.value;
    document.getElementById("brush-color-display").innerHTML = brushColor;
}



