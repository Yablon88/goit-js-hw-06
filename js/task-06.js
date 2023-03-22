const validLenght = document.getElementById("validation-input");

const atribute = Number(validLenght.getAttribute("data-length"));

validLenght.addEventListener("blur", onInputBlur);

function onInputBlur(elem) {
  if (elem.currentTarget.value.length !== atribute) {
    return validLenght.classList.add("invalid");
  }
  validLenght.classList.remove("invalid");
  return validLenght.classList.add("valid");
}
