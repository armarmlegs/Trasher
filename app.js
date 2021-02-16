let userTxt = [];

let lvl1 = ["up", "down", "space", "space"];
let lvl2 = [];
let lvl3 = [];

console.log(userTxt);
let input = document.querySelector("input");
console.log(input);

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
    compare();
  } else if (event.keyCode == keyboardEasy.left) {
    left = true;
    push("left");
    compare();
  } else if (event.keyCode == keyboardEasy.down) {
    down = true;
    push("down");
    compare();
  } else if (event.keyCode == keyboardEasy.up) {
    up = true;
    push("up");
    compare();
  } else if (event.keyCode == keyboardEasy.space) {
    space = true;
    push("space");
    compare();
  }
}
//function push string into the usertext array
function push(str) {
  userTxt.push(str);
  console.log(userTxt);
}

//function is equal qui va comparer le user input a l'array

function compare() {
  console.log(lvl1, userTxt);
  if (JSON.stringify(lvl1) === JSON.stringify(userTxt)) {
    console.log("good!");
  } else {
    console.log("All wrong");
  }
}

//game init, first event listener on the window, then funciton init that will start the countdown bar.
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13) {
    console.log("legggoooo");
    time();
  }
});

function time() {
  setTimeout(function () {
    
  }, 2000);
}

function init() {}

// let leggo = send() => {
//     const progressBar = document.querySelector('progress-bar');
//     progressBar.setAttribute('id','play-animation');

//launch the countdown bar 

