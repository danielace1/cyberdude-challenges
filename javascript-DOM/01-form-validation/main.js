const regFormEl = document.forms["registration-form"];
const userNameEl = regFormEl.elements.username;
const emailEl = regFormEl.elements.email;
const passwordEl = regFormEl.elements.password;
const phoneEl = regFormEl.elements.phone;
const termsEl = regFormEl.elements.terms;
const submitBtn = regFormEl.querySelector("#submit-btn");

function validateInputs() {
  userNameValidation();

  emailValidation();

  passwordValidation();

  if (phoneEl.value.length > 10) {
    phoneEl.classList.add("border-red-500");
    const errMsg = regFormEl.querySelector("#errMsgPhone");
    errMsg.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Enter your appropriate Mobile Number`;
    errMsg.className = "border-red-500 text-red-500 text-sm";
  } else {
    errMsg.innerHTML = "";
  }

  if (!termsEl.checked) {
    alert("Agree to the terms and conditions");
  } else {
    // return false;
  }
}

function userNameValidation() {
  if (userNameEl.value == "") {
    userNameEl.classList.add("border-red-500");
    const errMsg = regFormEl.querySelector("#errMsgName");
    errMsg.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Username is required`;
    errMsg.className = "border-red-500 text-red-500 text-sm";
  } else if (!(userNameEl.value.length > 3 && userNameEl.value.length < 20)) {
    alert("Enter your Proper Name");
  } else {
    errMsg.innerHTML = "";
  }
}

function emailValidation() {
  if (emailEl.value == "") {
    emailEl.classList.add("border-red-500");
    const errMsg = regFormEl.querySelector("#errMsgEmail");
    errMsg.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Email is required`;
    errMsg.className = "border-red-500 text-red-500 text-sm";
  } else {
    errMsg.innerHTML = "";
  }
}

function passwordValidation() {
  if (passwordEl.value == "") {
    passwordEl.classList.add("border-red-500");
    const errMsg = regFormEl.querySelector("#errMsgPassword");
    errMsg.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Password is required`;
    errMsg.className = "border-red-500 text-red-500 text-sm";
  } else {
    errMsg.innerHTML = "";
  }
}

const submitForm = (e) => {
  e.preventDefault();

  //   const inputsEl = regFormEl.querySelectorAll("input");

  //   inputsEl.forEach((field) => {
  //     field.required = true;
  //   });

  validateInputs();
};

submitBtn.addEventListener("click", submitForm);
