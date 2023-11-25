"use strict";

import { Point } from "./point.js";

const wrap = document.querySelector(".wrap");
const map = wrap.querySelector(".map");
const coords = document.querySelector(".coords");
const maxFoundTreasureDistance = 30;

wrap.style.width = `${map.width}px`;
wrap.style.height = `${map.height}px`;

let treasure = new Point(
  Math.floor(Math.random() * map.width),
  Math.floor(Math.random() * map.height)
);

console.log(treasure.toString());

function getPointDistance(userPoint) {
  let distanceX = userPoint.x - treasure.x;
  let distanceY = userPoint.y - treasure.y;
  return Math.sqrt(distanceX ** 2 + distanceY ** 2);
}

map.addEventListener("mousemove", (event) => {
  let point = new Point(event.offsetX, event.offsetY);

  coords.value = point.toString();

  if (getPointDistance(point) <= maxFoundTreasureDistance) {
    alert("You found the treasure! Good job!");
  }
});
