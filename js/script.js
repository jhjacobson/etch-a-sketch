const DEFAULT_GRID_SIZE = 20;
let gridSize = 20;
let etchBoxColor = "black";
let random;
createGrid(gridSize);

function colorSelected(element) {
    etchBoxColor = element.value;
    reset();
}

function createGrid(gridsize) {
    const etchBox = document.querySelector('#box');
    for (let i = 0; i < gridsize; i++) {
        const row = document.createElement('div');
        row.classList.add('rowContainer');
        for (let j = 0; j < gridsize; j++) {
            const etchBox = document.createElement('div');
            etchBox.classList.add('etchBox');
            row.appendChild(etchBox);
        }
        etchBox.appendChild(row);
    }
    // Add event listeners
    const etchBoxes = document.querySelectorAll('.etchBox');
    etchBoxes.forEach(etchBox => etchBox.addEventListener("mouseover", changeColor));
}

function changeColor(e) {
    let color;
    if (random == 1) {
        color = `rgb( ${(Math.floor(Math.random() * 256))},
            ${(Math.floor(Math.random() * 256))},
            ${(Math.floor(Math.random() * 256))})`;
    } else {
        color = etchBoxColor;
    }

    this.style.backgroundColor = color;
}

function reset() {
    const etchBoxes = document.querySelectorAll('.etchBox');
    // etchBoxes.forEach(etchBox => etchBox.classList.remove('hovered'));
    etchBoxes.forEach(etchBox => etchBox.style.backgroundColor = 'white');
}


const customizeGrid = document.querySelector('button#customizeGrid');
customizeGrid.addEventListener('click', () => {
    gridSize = prompt("How many squares do you want on each side?", DEFAULT_GRID_SIZE);
    let parent = document.getElementById("box");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
    if (gridSize == null || gridSize == 0) {
        gridSize = DEFAULT_GRID_SIZE;
    }
    createGrid(gridSize);
})

const colorChoices = document.querySelectorAll('button');
colorChoices.forEach((button) => {
    button.addEventListener('click', () => {
        let colorChoice = button.id;
        if (colorChoice == "Black") {
            etchBoxColor = "black";
            random = 0;
            reset();
        } else if (colorChoice == "Random") {
            random = 1;
            reset();
        } else if (colorChoice == "chooseColor") {
            etchBoxColor = colorSelected(element);
        } else if (colorChoice == "Reset") {
            random = 0;
            reset();
        }

    });
});