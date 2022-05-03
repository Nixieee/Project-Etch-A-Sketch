//Creating a grid

const grid = document.querySelector('.grid');
grid.innerHTML =
    `<div class="row">${'<div class="cell"></div>'.repeat(16)}</div>`
        .repeat(16);
        drawing();
//Handling drawing
function drawing(){
const cell = grid.querySelectorAll('.cell');
console.log(cell);
let isDrawing = false;
cell.forEach(element => element.addEventListener("mousedown", event => {
    element.style.backgroundColor = "black";
    isDrawing = true;
    cell.forEach(element => element.addEventListener("mouseover", event => {
        if(isDrawing === true){
        element.style.backgroundColor = "black";
    }
    }));
}));
cell.forEach(element => element.addEventListener("mouseup", event => {
isDrawing = false;
}));
}


//Grid size slider
var slider = document.getElementById("myRange");
var output = document.getElementById("rangeValue");
output.innerHTML = slider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  let i = 0, n = this.value;
  grid.innerHTML =
    `<div class="row">${'<div class="cell"></div>'.repeat(n)}</div>`
        .repeat(n);
        drawing();

}



