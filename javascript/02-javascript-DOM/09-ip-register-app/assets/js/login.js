import Justvalidate from "just-validate";

const formEl = document.getElementById("loginForm");

const validateForm = new Justvalidate(formEl, {
  validateBeforeSubmitting: true,
});

// Retrieve the stored user data from localStorage
const localStorageKey = "userId";
const storedUserData = localStorage.getItem(localStorageKey);

// Parse the JSON data
const userData = storedUserData ? JSON.parse(storedUserData) : [];

console.log("userData", userData);

validateForm.addField(
  "#email",
  [
    {
      rule: "required",
      errorMessage: "Email is required",
    },

    {
      rule: "customRegexp",
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMessage: "Enter a valid email address",
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

validateForm.addField(
  "#password",
  [
    {
      rule: "required",
      errorMessage: "Password is required",
    },
    {
      rule: "customRegexp",
      value: /[!@#$%^&*(),.?":{}|<>]/,
      errorMessage: "Password must contain at least one special character",
    },
    {
      rule: "minLength",
      value: 8,
      errorMessage: "Password must be at least 8 characters long",
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

// show/hide Password

// New password
const password = document.querySelector("#password");
const showPassword = document.querySelector("#showPassword");
const hidePassword = document.querySelector("#hidePassword");

showPassword.addEventListener("click", () => {
  hidePassword.classList.remove("hidden");
  password.type = "text";
  showPassword.classList.add("hidden");
});

hidePassword.addEventListener("click", () => {
  showPassword.classList.remove("hidden");
  password.type = "password";
  hidePassword.classList.add("hidden");
});

validateForm.onSuccess(() => {
  // Email
  const userEmailEl = document.querySelector("#email");

  // Password
  const userPasswordEl = document.querySelector("#password");

  const matchedUser = userData.find(
    (user) =>
      user.email === userEmailEl.value &&
      user.confirmPassword === userPasswordEl.value
  );

  console.log(matchedUser);

  if (matchedUser) {
    const loginBtnEl = document.querySelector("#loginBtn");

    // Redirect to userData.html if there is a match
    loginBtnEl.addEventListener("click", () => {
      window.location.href = "./userData.html";
    });
  } else {
    alert("Invalid Email or Password");
    formEl.reset();
  }
});
