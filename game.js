import {
  update as updateSnake,
  draw as drawSnake,
  snake_speed,
} from "./snake.js";

const gameBoard = document.getElementById("game-board");

let lastRenderTime = 0;

function main(currentTime) {
  const seconds = (currentTime - lastRenderTime) / 1000;
  window.requestAnimationFrame(main);

  if (seconds < 1 / snake_speed) return;

  console.log(seconds);

  lastRenderTime = currentTime;

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
