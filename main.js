"use strict";
let randomColumn = Math.ceil(Math.random() * 3);
let randomRow = Math.ceil(Math.random() * 3);
console.log(randomColumn, randomRow);

const cellIndex = Math.ceil(Math.random() * 9);
console.log(cellIndex);
const cell = document.querySelector(`option:nth-of-type(${cellIndex})`);
cell.style.gridColumnStart = randomColumn;
cell.style.gridRowStart = randomRow;
cell.setAttribute("selected", "");
console.log(cell);
