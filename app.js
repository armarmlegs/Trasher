let userTxt = [];

let i = 0;

let levels = [
  ["up", "down", "space", "space"],
  ["down", "up", "left", "right"],
  ["down", "up", "left", "space", "right"],
];
let timeout = null;
let timeLoss = null;

let youSuck = document.querySelector(".bg-popup");
console.log(youSuck);

let youWin = document.querySelector(".bg-popup2");

let input = document.querySelector("input");
let inputValue = document.querySelector("input").value;
console.log(input);
console.log();

input.addEventListener("keydown", handler, true);
let up = false;
let down = false;
let right = false;
let left = false;
let space = false;
let keyboardEasy = { left: 37, up: 38, right: 39, down: 40, space: 32 };

function handler(event) {
  if (event.keyCode == keyboardEasy.right) {
    right = true;
    push("right");
    input.value += "➡️,";
  } else if (event.keyCode == keyboardEasy.left) {
    left = true;
    push("left");
    input.value += "⬅️,";
  } else if (event.keyCode == keyboardEasy.down) {
    down = true;
    push("down");
    input.value += "⬇️,";
  } else if (event.keyCode == keyboardEasy.up) {
    up = true;
    push("up");
    input.value += "⬆️,";
  } else if (event.keyCode == keyboardEasy.space) {
    space = true;
    push("space");
    input.value += "↔️,";
  }
  compare();
}

//function push string into the usertext array
function push(str) {
  userTxt.push(str);
}

//function is equal qui va comparer le user input a l'array

function compare() {
  if (i === 3) {
    clearTimeout(timeout);
    youWin.style.display = "flex";
    setTimeout(function () {
      location.reload();
    }, 5000);
  }

  if (userTxt.length > levels[i].length) {
    alert(`try again dummy`);
    gameOver();
  } else if (JSON.stringify(levels[i]) == JSON.stringify(userTxt)) {
    nxtlvl();
    let hypeMan = document.querySelector(".hypeMan");
    hypeMan.innerHTML = ` <b>Damn Son ! step ${i} is complete</b>`;
  }
}

//game init, first event listener on the window, then function time that will start the countdown bar.
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13) {
    time();
    startBar();
    focus();
  }
});

function time() {
  timeout = setTimeout(function () {
    youSuck.style.display = "flex";
  }, 10000);
  timeLoss = setTimeout(function () {
    location.reload();
  }, 15000);
}

function gameOver() {
  userTxt = [];
  focus();
}

function nxtlvl() {
  levels[i] = levels[i++];
  userTxt = [];
  focus();
}

function startBar() {
  let progBar = document.querySelector(".progress-bar");
  progBar.setAttribute("id", "play-animation");
}

function clearBar() {
  let progBar = document.getElementById("play-animation");
  progBar.setAttribute("class", "progress-bar");

  console.log(progBar);
}

function focus() {
  input.focus();
}

x;
