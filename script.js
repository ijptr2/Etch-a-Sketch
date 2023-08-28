const cont=document.querySelector('.main_body');

function generateColor(){
    for (i=0;i<256;i++){
      let r = Math.floor(Math.random() * 256); // Random between 0-255
      let g = Math.floor(Math.random() * 256); // Random between 0-255
      let b = Math.floor(Math.random() * 256); // Random between 0-255
      return 'rgb(' + r + ',' + g + ',' + b + ')';}
  
  }

var gridSize=16
function createGrid(gridSize) {
  cont.innerHTML = "";
  cont.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  const color=document.querySelector('.rainBow');
  
  for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.style.width='100%';
    square.style.height='100%';

    square.classList.add("square");
    cont.appendChild(square);
    square.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = 'black';})

    color.addEventListener('click', function (){
        square.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = `${generateColor()}`;
    })})
    
  }
}

createGrid(gridSize);


function remove() {

    const div=document.querySelectorAll('.square');
    div.forEach(div=>{
        div.style.backgroundColor='#ccc';
    })
    
    
}



function setScreen(){
    const userInput=parseInt(prompt('Enter the screen size please!'));
    if (userInput<=100){
        createGrid(userInput);
    }else {
        alert('Please enter size less than 100x100')
    }
}


