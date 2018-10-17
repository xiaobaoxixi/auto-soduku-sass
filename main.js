"use strict";

const sectionS = document.querySelectorAll("section");
sectionS.forEach(buildResult);
function buildResult(s, i) {
  const allFieldS = s.querySelectorAll("select");
  let position = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  allFieldS.forEach(arrangeDigitsInEach3by3);
  function arrangeDigitsInEach3by3(sel, selI) {
    const selCol = (i % 3) * 3 + 1 + (selI % 3);
    const selRow = (selI - (selI % 3)) / 3 + (i - (i % 3));
    sel.setAttribute("data-row", selRow);
    sel.setAttribute("data-col", selCol);

    sel
      .querySelector(`option:nth-of-type(${selI + 1})`)
      .setAttribute("selected", ""); // by default, assign digit value based on their index+1, so that digits range from 1-9
    const cellIndex = position[Math.floor(Math.random() * position.length)];
    const columnStart = cellIndex % 3 === 0 ? 3 : cellIndex % 3;
    const rowStart = (cellIndex - columnStart) / 3 + 1;
    sel.querySelector(
      `option:nth-of-type(${cellIndex})`
    ).parentElement.style.gridColumnStart = columnStart;
    sel.querySelector(
      `option:nth-of-type(${cellIndex})`
    ).parentElement.style.gridRowStart = rowStart; // rearrange the digit based on random pick from position array
    position.splice(position.indexOf(cellIndex), 1); // update position array, so each position (1-9) only gets picked once
  }
}
check();
function check() {
  for (let rowNr = 1; rowNr < 10; rowNr++) {
    let fieldRow;
    if (rowNr >= 1 && rowNr <= 3) {
      fieldRow = 1;
    } else if (rowNr >= 4 && rowNr <= 6) {
      fieldRow = 2;
    } else if (rowNr >= 7 && rowNr <= 9) {
      fieldRow = 3;
    }
    const row = document.querySelectorAll(
      `section:nth-of-type(3n+${fieldRow}) [style^='grid-column-start: ${
        rowNr % 3 === 0 ? 3 : rowNr % 3
      }']`
    );
    console.log(row);
    let valueS = [];
    row.forEach(r => {
      valueS.push(r.querySelector("[selected]").getAttribute("value"));
    });
    console.log(valueS);
  }
}
