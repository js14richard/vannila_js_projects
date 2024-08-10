"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highScore = 0;

let numberField = document.querySelector(".number");

let guessField = document.querySelector(".guess");

function validateGuess() {
  const userGuess = Number(guessField.value);

  let message = "";

  if (!userGuess) {
    window.alert("⛔ Can't enter 0 as Guess");
    setGuessValue("");
    return;
  }

  if (userGuess > 20) {
    window.alert("⛔ Enter a number between 1 to 20");
    setGuessValue("");
    return;
  }

  if (score <= 0) {
    message = "💥 You Lost the Game";
  } else if (userGuess === secretNumber) {
    message = "🎉 You win";

    if (score > highScore) highScore = score;
    numberField.textContent = userGuess;
    numberField.style.width = "30rem";
    changeBackGroundColor("#60b347");
  } else {
    message = userGuess > secretNumber ? "📈 Too high" : "📉 Too low";
    score--;
  }

  document.querySelector(".highscore").textContent = highScore;
  setDisplayMessage(message);
  setScore(score);
}

function changeBackGroundColor(colorCode) {
  document.querySelector("body").style.backgroundColor = colorCode;
}

function setDisplayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function setScore(score) {
  document.querySelector(".score").textContent = score;
}

function setGuessValue(guessValue) {
    guessField.value = guessValue;
}

function resetGame() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  numberField.textContent = "?";
  numberField.style.width = "15rem";
  setGuessValue("");
  setDisplayMessage("Start guessing...");
  setScore(20);
  changeBackGroundColor("#222");
}

document.querySelector(".check").addEventListener("click", validateGuess);

document.querySelector(".again").addEventListener("click", resetGame);
