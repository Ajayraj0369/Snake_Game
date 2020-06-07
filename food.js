let food = { x: 10, y: 0 };

export function updateFood() {}

export function drawFood(gameBoard) {
  const elements = document.createElement("div");
  elements.className = "food";
  gameBoard.appendChild(elements);
  elements.style.gridRowStart = food.y;
  elements.style.gridColumnStart = food.x;
}
