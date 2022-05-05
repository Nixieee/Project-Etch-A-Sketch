//Creating a grid
const grid = document.querySelector('.grid');
function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add("cell")
        grid.appendChild(gridElement)
    }
    drawing();
}

//Handling drawing
function drawing() {
    const cell = grid.querySelectorAll('.cell');
    console.log(cell);
    let isDrawing = false;
    cell.forEach(element => element.addEventListener("mousedown", event => {
        element.style.backgroundColor = `${color.value}`;
        isDrawing = true;
        cell.forEach(element => element.addEventListener("mouseover", event => {
            if (isDrawing === true) {
                element.style.backgroundColor = `${color.value}`;
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
output.innerHTML = "Grid size: " + slider.value + "x" + slider.value; // Display the default slider value
setupGrid(slider.value);
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
    output.innerHTML = "Grid size: " + this.value + "x" + this.value;
    grid.innerHTML = "";
    setupGrid(this.value);
}


//Choose a color
const color = document.querySelector('.color');


