"use strict";

const allWords = ["apple", "pear", "banana", "peach", "blueberry"];
let words = [];
const imagesContainer = document.querySelector(".images");

function generateImages(words) {
  imagesContainer.innerHTML = "";
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    imagesContainer.innerHTML += `<img src="./images/${word}.png" alt="${word}" id="${word}">`;
  }
}

function getRandomWords(allWords, numberOfWords) {
  if (numberOfWords > allWords.length) {
    console.error(
      "Number of requested words exceeds the available word count."
    );
    return [];
  }

  const shuffledArray = allWords.slice().sort(() => Math.random() - 0.5);
  return shuffledArray.slice(0, numberOfWords);
}

words = getRandomWords(allWords, 3);
generateImages(words);
const images = document.querySelectorAll(".images img");

images.forEach((image) => {
  image.addEventListener("click", check);
});

function check(event) {
  let name = event.target.id;
  const word = prompt("Enter the word: ").toLocaleLowerCase();
  if (word === name) {
    alert("You are correct, good job!");
  } else {
    alert("Incorrect, try again!");
  }
}
