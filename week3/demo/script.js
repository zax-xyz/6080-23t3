const registerForm = document.getElementById("register-form");

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const passwordConfirmationInput = document.getElementById("password-confirmation");

const registerSubmitBtn = document.getElementById("register-btn");

const errorMsgElem = document.getElementById("error-msg");

registerForm.addEventListener("submit", e => {
  e.preventDefault();

  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmationInput.value;

  if (password !== passwordConfirm) {
    errorMsgElem.innerText = "password does not match";
  }
});
