"use strict";

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  equals(otherPoint) {
    return this.x === otherPoint.x && this.y === otherPoint.y;
  }
}

let treasure = new Point(100, 200);

console.log(treasure.equals(new Point(100, 200)));

const wrap = document.querySelector(".wrap");
const map = wrap.querySelector(".map");
const coords = document.querySelector(".coords");

wrap.style.width = `${map.width}px`;
wrap.style.height = `${map.height}px`;

map.addEventListener("mousemove", (event) => {
  let x = event.offsetX;
  let y = event.offsetY;
  let point = new Point(x, y);

  coords.value = `x: ${x}, y: ${y}`;

  if (treasure.equals(point)) {
    alert("Win");
  }
});
