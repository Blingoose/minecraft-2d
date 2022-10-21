const board = document.querySelector("#board");
const matrix = [
    ["sky","sky", "sky", "sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky",],
    ["sky","sky", "sky", "sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky"],
    ["sky","sky", "sky", "sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky",],
    ["sky","sky", "sky", "sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky",],
    ["sky","sky", "sky", "sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky",],
    ["sky","sky", "sky", "sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky",],
    ["sky","sky", "sky", "sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky",],
    ["sky","sky", "sky", "sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky",],
    ["sky","sky", "sky", "sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky",],
    ["sky","sky", "sky", "sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky",],
    ["sky","sky", "sky", "sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky",],
    ["sky","sky", "sky", "sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky",],
    ["sky","sky", "sky", "sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky",],
    ["sky","sky", "sky", "sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky",],
    ["sky","sky", "sky", "sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky",],
    ["sky","sky", "sky", "sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky",],
    ["sky","sky", "sky", "sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky","sky",],
    ["dirt","dirt", "dirt", "dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt"],
    ["dirt","dirt", "dirt", "dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt"],
    ["dirt","dirt", "dirt", "dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt","dirt"],
   
]
for (let i = 0; i < 21; i++) {
  for (let j = 1; j < 29; j++) {
    let cell = document.createElement("div");
    cell.classList.add(matrix[i][j]);
    board.appendChild(cell);
    cell.addEventListener("click", (e)=> {
        console.dir(e.target);
    })
  }
}
// const cells = document.querySelectorAll(".color");
// const cellsArr = [...cells];


function getElementOfCssGrid(x, y) {
  let gridComputedStyle = window.getComputedStyle(
    document.querySelector("#board")
  );
  let col = gridComputedStyle
    .getPropertyValue("grid-template-columns")
    .split(" ").length;

  let n = col * (y - 1) + x;
  return document.querySelector(`.color:nth-child(${n})`);
}



