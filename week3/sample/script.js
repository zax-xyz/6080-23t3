const registerCard = document.getElementById("register-card");
const counterCard = document.getElementById("counter-card");

const registerForm = document.getElementById("register-form");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("password-confirmation");
const errorMsgElem = document.getElementById("error-msg");

registerForm.addEventListener("submit", e => {
  e.preventDefault();

  const password = passwordInput.value;
  const passwordConfirmation = confirmPasswordInput.value;
  if (password !== passwordConfirmation) {
    errorMsgElem.innerText = "Passwords do not match";
    return;
  }

  if (password.length < 8) {
    errorMsgElem.innerText = "Password must be at least 8 characters";
    return;
  }

  if (![...password].some(c => c === c.toUpperCase() && c !== c.toLowerCase())) {
    errorMsgElem.innerText = "Password must have at least 1 capital letter";
    return;
  }

  if (![...password].some(c => !isNaN(c))) {
    errorMsgElem.innerText = "Password must have at least 1 number";
    return;
  }

  registerCard.style.display = "none";
  counterCard.style.display = "flex";
});

const countElem = document.getElementById("count");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");

incrementBtn.addEventListener("click", () => {
  countElem.innerText = Number(countElem.innerText) + 1;
});

decrementBtn.addEventListener("click", () => {
  countElem.innerText = Number(countElem.innerText) - 1;
});
