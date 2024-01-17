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
      errorMessage: "Password must be at least 8 characters long",
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

validateForm.addField(
  "#confirmPassword",
  [
    {
      rule: "required",
      errorMessage: "Confirm Password is required",
    },
    {
      validator: (val) => {
        const newPasswordValue = document.querySelector("#newPassword").value;
        return val === newPasswordValue;
      },
      errorMessage: "Passwords should be the same",
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

// show/hide Password

// New password
const newPassword = document.querySelector("#newPassword");
const newshowPassword = document.querySelector("#newshowPassword");
const newhidePassword = document.querySelector("#newhidePassword");

newshowPassword.addEventListener("click", () => {
  newhidePassword.classList.remove("hidden");
  newPassword.type = "text";
  newshowPassword.classList.add("hidden");
});

newhidePassword.addEventListener("click", () => {
  newshowPassword.classList.remove("hidden");
  newPassword.type = "password";
  newhidePassword.classList.add("hidden");
});

// Confirm password
const confirmPassword = document.querySelector("#confirmPassword");
const confirmshowPassword = document.querySelector("#confirmshowPassword");
const confirmhidePassword = document.querySelector("#confirmhidePassword");

confirmshowPassword.addEventListener("click", () => {
  confirmhidePassword.classList.remove("hidden");
  confirmPassword.type = "text";
  confirmshowPassword.classList.add("hidden");
});

confirmhidePassword.addEventListener("click", () => {
  confirmshowPassword.classList.remove("hidden");
  confirmPassword.type = "password";
  confirmhidePassword.classList.add("hidden");
});

validateForm.onSuccess(() => {});
