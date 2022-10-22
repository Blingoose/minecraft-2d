const variables = {
  board: document.querySelector("#board"),
  tools: document.querySelector(".tool-panel"),
  shovel: document.querySelector(".tool-shovel"),
  pickaxe: document.querySelector(".tool-pickaxe"),
  axe: document.querySelector(".tool-axe"),
  resourcePanel: document.querySelector(".resources-panel"),
  MATRIX_Y_AXIS: 20,
  MATRIX_X_AXIS: 28,
  cell: null,
  addTexture: null,
  currentTool: "",
};

const resources = {
  sky: "sky",
  dirt: "dirt",
  grass: "grass",
  rock: "rock",
  treeLeg: "tr-leg",
  treeTop: "tr-top",
  cloud: "cloud",
};

const inventory = {
  dirt: 0,
  grass: 0,
  rock: 0,
  "tr-top": 0,
  "tr-leg": 0,
  status: {
    dirt: document.querySelector(".dirt"),
    grass: document.querySelector(".grass"),
    rock: document.querySelector(".rock"),
    "tr-top": document.querySelector(".tr-top"),
    "tr-leg": document.querySelector(".tr-leg"),
  },
};

const tools = {
  shovel: "shovel",
  pickaxe: "pickaxe",
  axe: "axe",
};

const toolAndResource = {
  shovel: ["dirt", "grass"],
  pickaxe: ["rock"],
  axe: ["tr-top", "tr-leg"],
};

function appendElements() {
  for (let i = 1; i <= variables.MATRIX_Y_AXIS; i++) {
    for (let j = 1; j <= variables.MATRIX_X_AXIS; j++) {
      variables.cell = document.createElement("div");
      variables.cell.dataset.y = i;
      variables.cell.dataset.x = j;
      variables.addTexture = drawElements(variables.cell);
      variables.cell.classList.add(variables.addTexture);
      variables.board.append(variables.cell);
    }
  }
}

function drawElements(cell) {
  const y = parseInt(cell.dataset.y);
  const x = parseInt(cell.dataset.x);

  if (y === 18) {
    return resources.grass;
  }
  if (y > 18) {
    return resources.dirt;
  }
  if (
    (y > 13 && y < 18 && x > 3 && x < 5) ||
    (y > 14 && y < 18 && x > 13 && x < 16) ||
    (y === 9 && x > 10 && x < 19) ||
    (y === 8 && x > 11 && x < 18) ||
    (y === 7 && x > 12 && x < 17)
  ) {
    return resources.treeLeg;
  }
  if (
    (y >= 11 && y < 15 && x === 3) ||
    (y >= 11 && y < 14 && x === 4) ||
    (y >= 11 && y < 15 && x === 5)
  ) {
    return resources.treeTop;
  }
  if (
    (y > 11 && y < 20 && x > 11 && x < 18 && x != 15 && x != 14) ||
    (y > 9 && y < 12 && x === 12) ||
    (y > 9 && y < 12 && x > 13 && x < 16) ||
    (y > 9 && y < 12 && x > 16 && x < 18) ||
    (y > 11 && y < 15 && x > 13 && x < 16)
  ) {
    return resources.rock;
  } else return resources.sky;
}

function createGame() {
  appendElements();
  variables.tools.addEventListener("click", chooseTool);
  variables.board.addEventListener("click", blockClick);
  // resources.addEventListener("click", chooseResource);
}

function blockClick(e) {
  let div = e.target;
  let resource = e.target.getAttribute("class");
  if (matchToolandResource(resource)) {
    addToInventory(resource, div);
    removeResource(resource, div);
  }
  console.log(inventory);
}

function chooseTool(e) {
  console.log(e.target);
  if (e.target.classList.contains("shovel")) {
    variables.currentTool = tools.shovel;
    variables.shovel.classList.add("choosen-box");
    variables.pickaxe.classList.remove("choosen-box");
    variables.axe.classList.remove("choosen-box");
  } else if (e.target.classList.contains("pickaxe")) {
    variables.currentTool = tools.pickaxe;
    variables.pickaxe.classList.add("choosen-box");
    variables.shovel.classList.remove("choosen-box");
    variables.axe.classList.remove("choosen-box");
  } else if (e.target.classList.contains("axe")) {
    variables.currentTool = tools.axe;
    variables.axe.classList.add("choosen-box");
    variables.shovel.classList.remove("choosen-box");
    variables.pickaxe.classList.remove("choosen-box");
  }
  // else {
  //   currentTool = "";
  //   variables.axe.classList.remove("choosen-box");
  //   variables.shovel.classList.remove("choosen-box");
  //   variables.pickaxe.classList.remove("choosen-box");
  // }
}

function matchToolandResource(resource) {
  if (variables.currentTool) {
    return toolAndResource[variables.currentTool].includes(resource);
  }
  return false;
}

function addToInventory(resource, div) {
  if (div.classList.contains(resource)) {
    inventory[resource]++;
    inventory.status[resource].innerText++;
  }
}

function removeResource(resource, div) {
  if (div.classList.contains(resource)) {
    div.classList.remove(resource);
    div.classList.add("sky");
  }
}
createGame();
