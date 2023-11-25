"use strict";

const imageNames = {
  one: "mona lisa",
  two: "meisje met de parel",
};

window.onload = function () {
  const images = document.querySelectorAll(".images .guess-image");
  images.forEach((image) => {
    image.addEventListener("click", showAnswer);
  });
};

function askUser(imageName) {
  const input = prompt("Enter picture's name: ").toLocaleLowerCase().trim();

  if (input === imageNames[imageName]) {
    return true;
  }
  return false;
}

function showAnswer(event) {
  let image = event.target;
  console.log(image);
  let name = image.id;
  image.src = `./images/${name}.jpg`;

  if (askUser(name)) {
    alert("Correct!");
    return;
  } else {
    alert("Incorrect");
    showBlur(image);
  }
}

function showBlur(image) {
  let name = image.id;
  image.src = `./images/${name}blur.jpg`;
}
