import {
  snake_speed,
  update as updateSnake,
  draw as drawSnake,
} from "./snake.js";

const gameBoard = document.getElementById("game-board");

let lastRender = 0;

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRender) / 1000;

  if (secondsSinceLastRender < 1 / snake_speed) return;

  console.log(secondsSinceLastRender);
  lastRender = currentTime;

  update();
  draw();
}

main();

function update() {
  updateSnake();
}

function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
}
