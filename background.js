const body = document.querySelector("body");

const background = [
  "afternoon.jpg",
  "dawn.jpg",
  "evening.jpg",
  "morning.jpg",
  "night.jpg",
];

const bgIndex = Math.floor(Math.random() * background.length);
const select = background[bgIndex];
const span = document.querySelectorAll("span");
const input = document.querySelectorAll("input");

if (bgIndex === 0 || bgIndex === 3) {
  span.forEach((s) => {
    s.className = "black-span";
  });
  input.forEach((i) => {
    i.className = "black-input";
  });
} else {
  span.forEach((s) => {
    s.className = "white-span";
  });
  input.forEach((i) => {
    i.className = "white-input";
  });
}

body.style.backgroundImage = `url('background/${select}')`;
