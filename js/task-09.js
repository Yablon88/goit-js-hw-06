const button = document.querySelector(".change-color");
const changeColorText = document.querySelector(".color");

button.addEventListener("click", changeColor);

function changeColor() {
  let randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;
  changeColorText.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
