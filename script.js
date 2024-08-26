const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = randomBetween(0, 255);
const g = randomBetween(0, 255);
const b = randomBetween(0, 255);
const rgb = `rgb(${r},${g},${b})`;


let container = document.querySelector(".container");

for (i=0; i < 16; i++) {
    let row = container.appendChild(document.createElement("div"));
    row.setAttribute("class", "row");
    for (j=0; j < 16; j++) {
            let square = row.appendChild(document.createElement("div"));
            square.setAttribute("class", "square");
     }
}





