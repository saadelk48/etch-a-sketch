

var size=document.getElementById("size");

function updateRange(range){
    size.textContent=range+" x "+range;
    updatePanel(range);
}




function updatePanel(N){
    let squar=document.getElementById("panel_squar");
    squar.innerHTML = ''; // Clear existing content
    
    let squareSize=(squar.clientWidth) / N;
      for (let i = 0; i < N*N; i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'box';
        newDiv.style.width=squareSize+"px";
        newDiv.style.height=squareSize+"px";
        squar.appendChild(newDiv);
      }
}

updateRange(16);

