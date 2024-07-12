

var size=document.getElementById("size");

function updateRange(range){
    size.textContent=range+" x "+range;
    updatePanel(range);
}


let squar=document.getElementById("panel_squar");

function updatePanel(N){
   
    squar.innerHTML = ''; // Clear existing content
    
    let squareSize=(squar.clientWidth) / N;
      for (let i = 0; i < N*N; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'box';
        newDiv.style.width=squareSize+"px";
        newDiv.style.height=squareSize+"px";
        newDiv.setAttribute('draggable', 'false');
        squar.appendChild(newDiv);
      }
}

updateRange(16);


penColor=document.getElementById('colorPicker').value;

var isColorMode=true;
var isRainbowMode=false;
var  isEraserMode=false;

function switchColorMode() {
  isColorMode = true;
  isRainbowMode = false;
  isEraserMode = false;
}

function switchRainbowMode() {
  isColorMode = false;
  isRainbowMode = true;
  isEraserMode = false;
}

function switchEraserMode() {
  isColorMode = false;
  isRainbowMode = false;
  isEraserMode = true;
}

squar.addEventListener('mousedown', (e) => {
  isDrawing = true;
  if (e.target.classList.contains('box')) {
    setpencolor();
    e.target.style.backgroundColor = penColor;
  }
});

squar.addEventListener('mousemove', (e) => {
  if (isDrawing && e.target.classList.contains('box')) {
    setpencolor();
    e.target.style.backgroundColor = penColor;
  }
});

squar.addEventListener('mouseup', () => {
  isDrawing = false;
});

squar.addEventListener('mouseleave', () => {
  isDrawing = false;
});


function setpencolor(){
if (isColorMode) {
  penColor = document.getElementById('colorPicker').value;
} else if (isRainbowMode) {
  penColor = getRandomRainbowColor();
} else if (isEraserMode) {
  penColor = "white"; // Set to an empty string to act as an eraser
}
}


function clearPanel(){
  document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor = "";
  });
}



const rainbowColors = [
  "#FF0000", // Red
  "#FF7F00", // Orange
  "#FFFF00", // Yellow
  "#00FF00", // Green
  "#0000FF", // Blue
  "#4B0082", // Indigo
  "#9400D3"  // Violet
];

// Function to get a random color from the rainbow colors
function getRandomRainbowColor() {
  const randomIndex = Math.floor(Math.random() * rainbowColors.length);
  return rainbowColors[randomIndex];
}

function showGrid(){
  document.querySelectorAll(".box").forEach(element => {
    element.style.border = "1px solid black";
  });
}
function hideGrid(){
document.querySelectorAll(".box").forEach(element => {
  element.style.border = "none";
});
}