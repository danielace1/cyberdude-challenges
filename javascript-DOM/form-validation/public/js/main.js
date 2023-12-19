const regFormEl = document.forms["registration-form"];
const userNameEl = regFormEl.elements.username;
const genderEl = regFormEl.elements.gender;
const emailEl = regFormEl.elements.email;
const passwordEl = regFormEl.elements.password;
const phoneEl = regFormEl.elements.phone;
const termsEl = regFormEl.elements.terms;
const submitBtn = regFormEl.querySelector("#submit-btn");

function validateInputs() {
  userNameValidation();

  genderValidation();

  emailValidation();

  passwordValidation();

  phoneNumberValidation();

  if (!termsEl.checked) {
    alert("Agree to the terms and conditions");
    return true;
  }
}

function userNameValidation() {
  const errMsg = regFormEl.querySelector("#errMsgName");
  if (userNameEl.value == "") {
    userNameEl.classList.add("border-red-500");
    errMsg.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Username is required`;
    errMsg.classList.add("errorMessage");
  } else if (!(userNameEl.value.length > 3 && userNameEl.value.length < 20)) {
    alert("Enter your Proper Name");
  } else {
    errMsg.innerHTML = "";
  }
}

function genderValidation() {
  const errMsg = regFormEl.querySelector("#errMsgGender");
  let genderSelected = false;
  for (let i = 0; i < genderEl.length; i++) {
    if (genderEl[i].checked) {
      errMsg.innerHTML = "";
      break;
    }
    if (!genderSelected) {
      errMsg.innerHTML = `Please select a gender`;
      errMsg.classList.add("errorMessage");
    }
  }
}

function emailValidation() {
  const errMsg = regFormEl.querySelector("#errMsgEmail");
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailEl.value == "") {
    emailEl.classList.add("border-red-500");
    errMsg.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Email is required`;
    errMsg.classList.add("errorMessage");
  } else if (!emailRegex.test(emailEl.value)) {
    errMsg.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Invalid email address`;
    errMsg.classList.add("errorMessage");
  } else {
    errMsg.innerHTML = "";
  }
}

function passwordValidation() {
  const errMsg = regFormEl.querySelector("#errMsgPassword");
  let specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
  if (passwordEl.value == "") {
    passwordEl.classList.add("border-red-500");
    errMsg.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Password is required`;
    errMsg.classList.add("errorMessage");
  } else if (!specialCharacterRegex.test(passwordEl.value)) {
    errMsg.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Password must contain at least one special character`;
    errMsg.classList.add("errorMessage");
  } else if (passwordEl.value.length < 8) {
    errMsg.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Password must be at least 8 characters long`;
    errMsg.classList.add("errorMessage");
  } else {
    errMsg.innerHTML = "";
  }
}

function phoneNumberValidation() {
  const errMsg = regFormEl.querySelector("#errMsgPhone");
  if (phoneEl.value.length > 10) {
    phoneEl.classList.add("border-red-500");
    errMsg.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> It should not exceed more than 10 digits`;
    errMsg.classList.add("errorMessage");
  } else {
    errMsg.innerHTML = "";
  }
}

const submitForm = (e) => {
  e.preventDefault();

  // const formData = new FormData(regFormEl);
  // const jsonData = JSON.stringify(Object.fromEntries(formData));
  // localStorage.setItem(formData, jsonData);
  // console.log(jsonData);
  // document.addEventListener("DOMContentLoaded", jsonData);

  const userData = {
    userNameEl: userNameEl.value,
    emailEl: emailEl.value,
    genderEl: genderEl.value,
    passwordEl: passwordEl.value,
  };
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Data sent to the server:", data);
      // You can handle the response from the server here
    })
    .catch((error) =>
      console.error("Error sending data to the server:", error)
    );

  //   const inputsEl = regFormEl.querySelectorAll("input");

  //   inputsEl.forEach((field) => {
  //     field.required = true;
  //   });

  validateInputs();
};

submitBtn.addEventListener("click", submitForm);
