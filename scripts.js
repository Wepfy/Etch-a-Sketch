const body = document.querySelector("body");
const container = document.querySelector(".container");
const button = document.createElement("button");
button.textContent = "Change grid size";

body.insertBefore(button, container);

const clearButton = document.querySelector("#reset-button");



let gridSize = 16; 

// Create the default grid
createGrid(gridSize);

// Evenlister to change grid size
button.addEventListener("click", () => {
    const newSize = getGridSizeFromUser();
    if(newSize) {
        deleteGrid();
        gridSize = newSize;
        createGrid(gridSize);
    }   
});

//Event listener for clearing the grid
clearButton.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".grid-item");
    boxes.forEach(box => {
        box.style.backgroundColor = "";
    });
});


function getGridSizeFromUser() {
    const input = prompt("Please enter grid size.");

    if (input === null) return null; // Handle user pressing cancel

    const parsedSize = parseInt(input, 10);

    if(isNaN(parsedSize) || parsedSize < 1 || parsedSize > 100) {
        alert("Enter a number between 1 and 100");
        return null;
    } 

    return parsedSize;
}

// Create a grid item with size based on gridSize
function createGridItem(gridSize) {
    const containerHeight = container.clientHeight; 
    const boxSize = containerHeight / gridSize; 
    const box = document.createElement("div");
    box.className = "grid-item";
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;

    // Change box color on hover
    box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = randomColor();

    });

    return box;
}

//Create a grid of grid items
function createGrid(gridSize) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < (gridSize * gridSize); i++) {
        const box = createGridItem(gridSize);
        fragment.appendChild(box);
    }

    container.appendChild(fragment);
}

//Remove all grid items
function deleteGrid() {
    const boxes = document.querySelectorAll(".grid-item");
    boxes.forEach(box => box.remove());
}

//Generate random rgb color
function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}








    
