const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

console.log(fontSizeControl);

fontSizeControl.addEventListener("input", position);

function position() {
  text.style.fontSize = fontSizeControl.value + "px";
}
