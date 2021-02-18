let userTxt = [];

let i = 0;

let currentLevelIndex = 0;
console.log(currentLevelIndex);
let levels = [
  ["up", "down", "space", "space"],
  ["down", "up", "left", "right"],
  ["down", "up", "left", "space", "right"],
];
let timeout = null;

let input = document.querySelector("input");
console.log(input);
let point = document.querySelector(".txtArea");

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
    point.innerHTML += "right";
  } else if (event.keyCode == keyboardEasy.left) {
    left = true;
    push("left");
    console.log("leftArrow");
  } else if (event.keyCode == keyboardEasy.down) {
    down = true;
    push("down");
    console.log("down");
  } else if (event.keyCode == keyboardEasy.up) {
    up = true;
    push("up");
    console.log("up");
  } else if (event.keyCode == keyboardEasy.space) {
    space = true;
    push("space");
    console.log("space");
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
    return alert("you won the game speed demon, if you care to try again refresh the page");
    
  }

  if (userTxt.length > levels[i].length) {
    alert(`try again dummy`);
    gameOver();
    clearBar();
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
   timeout =setTimeout(function () {
    alert("Game Over you are wayyy to slowwww homie");
  }, 10000);
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
  point.focus();
}
