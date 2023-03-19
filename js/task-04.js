const counterNode = document.getElementById("value");
let counterValue = Number(counterNode.textContent);

// console.log(typeof counterValue);

const buttonDecrement = counterNode.previousElementSibling;
const buttonInkrement = counterNode.nextElementSibling;

buttonDecrement.addEventListener("click", () => {
  counterNode.textContent = counterValue -= 1;
});

buttonInkrement.addEventListener("click", () => {
  counterNode.textContent = counterValue += 1;
});
