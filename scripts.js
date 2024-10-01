// Box size is height of a container / number of boxes in a side so 960/ side and should append side * side boxes
const body = document.querySelector("body");
const container = document.querySelector(".container");
const button = document.createElement("button");
//Create a button for altering the grid
button.textContent = "Change grid size";
button.style.padding = "10px";
body.insertBefore(button, container);

let size = 16; // number of sides. default 16

// Create the default grid
createGrid(size);

// Evenlister to read user input and alter grid
button.addEventListener("click", () => {
    let newSize = (prompt("Please enter grid size."));
    const parsedSize = parseInt(newSize, 10);
    if(isNaN(parsedSize) || parsedSize < 1 || parsedSize > 100) {
        alert("Enter a number between 1 and 100");
    } else {
        deleteGrid();
        size = parsedSize;
        createGrid(size);
    }
    
});

// Create a box with size x
function createBox(size) {
    const containerHeight = container.clientHeight; // get container height;
    const boxSize = containerHeight / size; // Calculate size for a single box
    const box = document.createElement("div");
    box.className = "grid-item";
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;

    // Changes box color randomly when hovering
    box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = randomColor();

    });
    //Changes color back to white when leaving the box element
    box.addEventListener("mouseleave", () => {
        box.style.backgroundColor = "white";
    });

    return box;
}

//Create a grid of boxes
function createGrid(size) {
    /* for (let i = 0; i < (size * size); i++) {
        const box = createBox(size);
        container.appendChild(box);
    } */

    // This is faster
    //Create documentFragment and add boxes
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < (size * size); i++) {
        const box = createBox(size);
        fragment.appendChild(box);
    }
    container.appendChild(fragment);
}

//Delete all grid-items (boxes)
function deleteGrid() {
    const boxes = document.querySelectorAll(".grid-item");

    boxes.forEach(box => {
        box.remove();
    });
}

//Generate random rgb color
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}








    
