const input = document.getElementById("name-input");
const nameLabel = document.getElementById("name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value.trim().length === 0) {
    return (nameLabel.textContent = "Anonymous");
  }
  return (nameLabel.textContent = event.currentTarget.value);
}
