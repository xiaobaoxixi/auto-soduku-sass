"use strict";
let randomColumn = Math.ceil(Math.random() * 3);
let randomRow = Math.ceil(Math.random() * 3);
console.log(randomColumn, randomRow);

const cellIndex = Math.ceil(Math.random() * 9);
console.log(cellIndex);
const cell = document.querySelector(`option:nth-of-type(${cellIndex})`);
cell.setAttribute("selected", "");
cell.parentElement.style.gridColumnStart = randomColumn; // option is inside select, select is grid element
cell.parentElement.style.gridRowStart = randomRow;
console.log(cell);
