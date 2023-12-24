const regFormEl = document.forms["registration-form"];
const userNameEl = regFormEl.elements.username;
const genderEl = regFormEl.elements.gender;
const emailEl = regFormEl.elements.email;
const passwordEl = regFormEl.elements.password;
const phoneEl = regFormEl.elements.phone;
const termsEl = regFormEl.elements.terms;
const submitBtn = regFormEl.querySelector("#submit-btn");

let displayedData = [];

// Validation
function validateInputs() {
  userNameValidation();

  genderValidation();

  emailValidation();

  passwordValidation();

  phoneNumberValidation();
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

  const formData = new FormData(regFormEl);
  const jsonData = Object.fromEntries(formData.entries());

  if (!termsEl.checked) {
    alert("Please agree to the terms and conditions");
    return;
  }

  if (Object.values(jsonData).some((value) => value === "")) {
    alert("Please fill in all required fields");
    return;
  }

  const existingData =
    JSON.parse(localStorage.getItem("userRegistration")) || [];
  existingData.push(jsonData);

  localStorage.setItem("userRegistration", JSON.stringify(existingData));

  validateInputs();
  getRegistrationData();
};

function getRegistrationData() {
  const registrationData = localStorage.getItem("userRegistration");
  const registrationDataArr = JSON.parse(registrationData);

  const regDataEl = document.getElementById("Registration-Data");

  const newDataArr = registrationDataArr.filter(
    (data) => !isDataDisplayed(data)
  );

  if (newDataArr) {
    regDataEl.classList.remove("hidden");

    const finalData = newDataArr
      .map((registeredData) => {
        const newData = `
    <div>
    <div class="flex space-x-2 items-center">
      <h4 class="font-bold">Username:</h4>
      <span>${registeredData.username}</span>
    </div>
    <div class="flex space-x-2 items-center">
      <h4 class="font-bold">Email:</h4>
      <span>${registeredData.email}</span>
    </div>
    <div class="flex space-x-2 items-center">
      <h4 class="font-bold">Phone:</h4>
      <span>${registeredData.phone}</span>
    </div>
    <div class="flex space-x-2 items-center">
      <h4 class="font-bold">Address:</h4>
      <span>${registeredData.address}</span>
    </div>
    <div class="thankMessage">Thank you for registering!</div>
  </div>
    `;
        return newData;
      })
      .join(" ");

    regDataEl.innerHTML += finalData;
  }
  displayedData = [...displayedData, ...newDataArr];
}

// Check if the data has already been displayed
function isDataDisplayed(data) {
  return displayedData.some(
    (displayed) =>
      displayed.username === data.username &&
      displayed.email === data.email &&
      displayed.phone === data.phone &&
      displayed.address === data.address
  );
}

regFormEl.addEventListener("submit", submitForm);
