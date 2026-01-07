// Project 02: Interactive Profile Card
// Built by Jaylon Montes 😎

// THEME BUTTON
const themeBtn = document.getElementById("themeBtn");
const card = document.querySelector(".card");

let darkMode = false;

themeBtn.addEventListener("click", function () {
  if (!darkMode) {
    card.style.backgroundColor = "#111827";
    card.style.color = "white";
    themeBtn.textContent = "Light Theme ☀️";
    darkMode = true;
  } else {
    card.style.backgroundColor = "white";
    card.style.color = "black";
    themeBtn.textContent = "Dark Theme 🌙";
    darkMode = false;
  }
});

// INFO BUTTON
const infoBtn = document.getElementById("infoBtn");
const extraInfo = document.getElementById("extraInfo");

let infoVisible = false;

infoBtn.addEventListener("click", function () {
  if (!infoVisible) {
    extraInfo.classList.remove("hidden");
    infoBtn.textContent = "Hide Info 🙈";
    infoVisible = true;
  } else {
    extraInfo.classList.add("hidden");
    infoBtn.textContent = "Show More 👀";
    infoVisible = false;
  }
});

