import { getDirection } from "./input.js";

let location = [{ x: 11, y: 11 }];

export function draw(gameBoard) {
  location.forEach((segment) => {
    const elements = document.createElement("div");
    elements.className = "snake";
    gameBoard.appendChild(elements);
    elements.style.gridRowStart = segment.y;
    elements.style.gridColumnStart = segment.x;
  });
}

export function updateSnakes() {
  const inputDirection = getDirection();
  for (let i = location.length - 2; i >= 0; i--) {
    location[i + 1] = { ...location[i] };
  }
  console.log(location);
  location[0].x += inputDirection.x;
  location[0].y += inputDirection.y;
}
