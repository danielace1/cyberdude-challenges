import Justvalidate from "just-validate";

const formEl = document.getElementById("registerationForm");

const validateForm = new Justvalidate(formEl, {
  validateBeforeSubmitting: true,
});

validateForm.addField(
  "#firstname",
  [
    {
      rule: "required",
      errorMessage: "FirstName is required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 15,
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

validateForm.addField(
  "#lastname",
  [
    {
      rule: "required",
      errorMessage: "LastName is required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 15,
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

validateForm.addRequiredGroup("#gender", "Please select a gender", {
  errorLabelCssClass: ["form-error"],
});

validateForm.addField(
  "#username",
  [
    {
      rule: "required",
      errorMessage: "UserName is required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 15,
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

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
  "#newPassword",
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
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

// show/hide PasswordField

// new password
const newPassword = document.querySelector("#newPassword");

const newshowPassword = document.querySelectorAll(".newshowPassword");
const newhidePassword = document.querySelectorAll(".newhidePassword");
newshowPassword.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    newhidePassword[index].classList.remove("hidden");
    newPassword.type = "text";
    newshowPassword[index].classList.add("hidden");
  });
});

newhidePassword.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    newshowPassword[index].classList.remove("hidden");
    newPassword.type = "password";
    newhidePassword[index].classList.add("hidden");
  });
});

// confirm password
const confirmPassword = document.querySelector("#confirmpassword");
const confirmshowPassword = document.querySelectorAll(".confirmshowPassword");
const confirmhidePassword = document.querySelectorAll(".confirmhidePassword");
confirmshowPassword.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    confirmhidePassword[index].classList.remove("hidden");
    confirmPassword.type = "text";
    confirmshowPassword[index].classList.add("hidden");
  });
});

confirmhidePassword.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    confirmshowPassword[index].classList.remove("hidden");
    confirmPassword.type = "password";
    confirmhidePassword[index].classList.add("hidden");
  });
});

validateForm.onSuccess(() => {});
