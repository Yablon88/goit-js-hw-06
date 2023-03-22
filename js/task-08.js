const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  // --------------------------------------------------------- вивід  даних через formData!!!

  //      const formData = new FormData(event.currentTarget);
  //     formData.forEach((value, name) => {
  //     console.log("onFormSubmit ->name", name);
  //     console.log("onFormSubmit ->value", value);
  //   });

  //   if (emailEl === 0) {
  //
  //   }

  const emailValue = event.currentTarget.elements.email.value;
  const passwordValue = event.currentTarget.elements.password.value;

  event.preventDefault(); // знімаємо перезагрузку сторінки при зборі даних !!!

  if (passwordValue.length === 0 || emailValue.length === 0) {
    return window.alert("Заповніть усі поля!");
  }
  const formData = { email: emailValue, password: passwordValue };
  form.reset(); //   скидаю дані в формі.
  return console.log(formData);
}
