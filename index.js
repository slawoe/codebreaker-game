//SELECTORS
const bluePin = document.querySelector("#bluePin");
const greenPin = document.querySelector("#greenPin");
const redPin = document.querySelector("#redPin");
const yellowPin = document.querySelector("#yellowPin");
const blackPin = document.querySelector("#blackPin");
const guess1 = document.querySelector("#guess1");
const guess2 = document.querySelector("#guess2");
const guess3 = document.querySelector("#guess3");
const guess4 = document.querySelector("#guess4");
const guess5 = document.querySelector("#guess5");
const attemptsCounter = document.querySelector("#attempts");
const rightCounter = document.querySelector("#right");
const startButton = document.querySelector("#startButton");
const solveButton = document.querySelector("#solveButton");
const winner = document.querySelector("#winner");

//VARIABLES
let pickedColor = 0;
let enigmaColor = 0;
let enigma = [];
let mySolution = ["", "", "", "", ""];
let right = 0;
let attempts = 0;

//FUNCTIONS
function randomColors() {
  enigma = [];
  for (let i = 0; i < 5; i++) {
    randomColor = Math.floor(Math.random() * 5 + 1);
    enigma.push(randomColor);
  }
}

function colorChanger(
  expression,
  where,
  color1,
  color2,
  color3,
  color4,
  color5
) {
  where.classList.remove(color1, color2, color3, color4, color5);
  switch (expression) {
    case 1:
      where.classList.add(color1);
      break;
    case 2:
      where.classList.add(color2);
      break;
    case 3:
      where.classList.add(color3);
      break;
    case 4:
      where.classList.add(color4);
      break;
    case 5:
      where.classList.add(color5);
      break;
    default:
      alert("Choose a color first!");
      break;
  }
}

function startEnigma() {
  colorChanger(enigma[0], enigma1, "x4", "y9", "c27", "l11", "k98");
  colorChanger(enigma[1], enigma2, "x4", "y9", "c27", "l11", "k98");
  colorChanger(enigma[2], enigma3, "x4", "y9", "c27", "l11", "k98");
  colorChanger(enigma[3], enigma4, "x4", "y9", "c27", "l11", "k98");
  colorChanger(enigma[4], enigma5, "x4", "y9", "c27", "l11", "k98");
}

//DOCUMENT LOADED STARTING FUNCTIONS
randomColors();
startEnigma();

//EVENTLISTENERS
bluePin.addEventListener("click", () => {
  pickedColor = 1;
});
greenPin.addEventListener("click", () => {
  pickedColor = 2;
});
redPin.addEventListener("click", () => {
  pickedColor = 3;
});
yellowPin.addEventListener("click", () => {
  pickedColor = 4;
});
blackPin.addEventListener("click", () => {
  pickedColor = 5;
});

guess1.addEventListener("click", () => {
  colorChanger(pickedColor, guess1, "blue", "green", "red", "yellow", "black");
  mySolution[0] = pickedColor;
});
guess2.addEventListener("click", () => {
  colorChanger(pickedColor, guess2, "blue", "green", "red", "yellow", "black");
  mySolution[1] = pickedColor;
});
guess3.addEventListener("click", () => {
  colorChanger(pickedColor, guess3, "blue", "green", "red", "yellow", "black");
  mySolution[2] = pickedColor;
});
guess4.addEventListener("click", () => {
  colorChanger(pickedColor, guess4, "blue", "green", "red", "yellow", "black");
  mySolution[3] = pickedColor;
});
guess5.addEventListener("click", () => {
  colorChanger(pickedColor, guess5, "blue", "green", "red", "yellow", "black");
  mySolution[4] = pickedColor;
});

startButton.addEventListener("click", () => {
  location.reload();
});

solveButton.addEventListener("click", () => {
  for (let i = 0; i < mySolution.length; i++) {
    if (
      typeof mySolution[i] != "number" &&
      mySolution[i] <= 4 &&
      mySolution[i] >= 0
    ) {
      alert(
        "One of your fields seems to be empty (white). Please fill it with a color and try again!."
      );
      return;
    }
  }
  attempts++;
  right = 0;
  if (enigma[0] === mySolution[0]) {
    right++;
  }
  if (enigma[1] === mySolution[1]) {
    right++;
  }
  if (enigma[2] === mySolution[2]) {
    right++;
  }
  if (enigma[3] === mySolution[3]) {
    right++;
  }
  if (enigma[4] === mySolution[4]) {
    right++;
  }
  attemptsCounter.innerText = attempts;
  rightCounter.innerText = right;
  if (right === 5) {
    winner.classList.remove("invisible");
    solveButton.disabled = true;
    enigma1.classList.remove("hidden");
    enigma2.classList.remove("hidden");
    enigma3.classList.remove("hidden");
    enigma4.classList.remove("hidden");
    enigma5.classList.remove("hidden");
  }
});
