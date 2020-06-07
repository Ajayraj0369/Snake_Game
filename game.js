import { draw, updateSnakes } from "./snake.js";
import { drawFood, updateFood } from "./food.js";

let renderTime = 0;
const snake_speed = 1;

const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  window.requestAnimationFrame(main);
  let TimeSincelastRender = (currentTime - renderTime) / 1000;
  if (TimeSincelastRender < 1 / snake_speed) return;
  console.log("one second");
  renderTime = currentTime;

  updateSnake();

  drawSnake();
}

main();
function updateSnake() {
  updateSnakes();
}

function drawSnake() {
  gameBoard.innerHTML = "";
  draw(gameBoard);
  drawFood(gameBoard);
}
