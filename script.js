let container = document.querySelector(".container");

const resetButton = document.querySelector(".reset");

const gridSize = document.querySelector(".size");

let randomColor = document.querySelector(".color");



function removeGrid(){
    let rows = document.querySelectorAll(".row");
    let squares =document.querySelectorAll(".square")
    rows.forEach(row => {
        row.remove();
      });
    squares.forEach(square => {
        square.remove();
    })
};


function createGrid(gridEdge){
    removeGrid()
    for (i=0; i < gridEdge; i++) {
        let row = container.appendChild(document.createElement("div"));
        row.setAttribute("class", "row");
        for (j=0; j < gridEdge; j++) {
                let square = row.appendChild(document.createElement("div"));
                square.setAttribute("class", "square");
                square.style.opacity = 0.1;
         }
    }
    changeColor();
}

window.addEventListener("load", () => {
    createGrid(16);
})


function changeColor() {
    let hoverColor = "black";
    const squareEl = document.querySelectorAll(".square")
    squareEl.forEach(squares => {
        squares.addEventListener("mouseover",(e)=>{
            e.target.style.backgroundColor = hoverColor;
            let currentOpacity = parseFloat(e.target.style.opacity)
            e.target.style.opacity = currentOpacity + 0.1;
        });
    });
}

gridSize.addEventListener("click", () => {
    let userChoice = prompt("Enter the number between 2 and 100");
    let userNumber = Number(userChoice);

    if (Number.isInteger(userNumber) && userNumber >= 2 && userNumber <= 100) {
        createGrid(userNumber);
    } else {
        alert("Please choose an integer number between 2 and 100.");
    }
})

function getRandomColor(){
    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    hoverColor = `rgb(${r},${g},${b})`;
}

randomColor.addEventListener("click", () => {
    const squareEl = document.querySelectorAll(".square")
    squareEl.forEach(squares => {
        squares.addEventListener("mouseover",(e)=>{
            getRandomColor();
            e.target.style.backgroundColor = hoverColor;
        });
    });
})

resetButton.addEventListener("click", () => {
    let userChoice = prompt("Enter the number between 2 and 100");
    let userNumber = Number(userChoice);
    createGrid(userNumber);
})




