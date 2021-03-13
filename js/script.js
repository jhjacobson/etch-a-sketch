const DEFAULT_GRID_SIZE = 20;
let gridSize = DEFAULT_GRID_SIZE;
let etchBoxColor = "black";
let random;
createGrid(gridSize);

const slider = document.getElementById("slider");
const output = document.getElementById("gridSizeNumber");

slider.oninput = function() { output.textContent = `Grid Size: ${this.value}`; };

slider.onchange = function() {
    let parent = document.getElementById("box");
    while (parent.firstChild) { parent.removeChild(parent.firstChild); }
    createGrid(this.value);
}

function colorSelected(element) {
    etchBoxColor = element.value;
    reset();
    random = 0;
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
    const etchBoxes = document.querySelectorAll('.etchBox');
    etchBoxes.forEach(etchBox => etchBox.addEventListener("mouseover", changeColor));
}

function changeColor(e) { this.style.backgroundColor = (random === 1) ? getRandomColor() : etchBoxColor; }
const getRandomColor = () => `rgb( ${rand0to256()},${rand0to256()},${rand0to256()})`;
const rand0to256 = () => (Math.floor(Math.random() * 256));

function reset() {
    const etchBoxes = document.querySelectorAll('.etchBox');
    etchBoxes.forEach(etchBox => etchBox.style.backgroundColor = 'white');
}

const settings = document.querySelectorAll('button');
settings.forEach((button) => {
    button.addEventListener('click', () => {
        let setting = button.id;
        if (setting === "Random") {
            random = 1;
            reset();
        } else if (setting === "Reset") {
            random = 0;
            reset();
        }
    });
});