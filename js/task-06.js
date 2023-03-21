const audit = document.getElementById("validation-input");

const atribute = Number(audit.getAttribute("data-length"));

audit.addEventListener("blur", onInputBlur);

function onInputBlur(elem) {
  if (elem.currentTarget.value.length != atribute) {
    return audit.classList.add("invalid");
  }
  audit.classList.remove("invalid");
  return audit.classList.add("valid");
}
