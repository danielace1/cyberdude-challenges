import Justvalidate from "just-validate";
import { v4 as uuidv4 } from "uuid";

const formEl = document.getElementById("registerationForm");

const localStorageKey = "userId";

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

validateForm.addField(
  "#terms",
  [
    {
      rule: "required",
      errorMessage: "Please accept the Terms and Conditions.",
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

// IP - Address
const ipAddressPlaceholder = document.getElementById("ipaddress");

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const cleanedIpAddress = xhr.responseText.trim();
    ipAddressPlaceholder.value = cleanedIpAddress;
  }
};

xhr.open("GET", "https://ipv4.icanhazip.com/");
xhr.send();

// Time
const dateAndTime = document.querySelector("#time");

const newDate = new Date();

const neededFormat = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true,
};
const formattedDateAndTime = newDate.toLocaleString("en-US", neededFormat);

dateAndTime.value = formattedDateAndTime;

// Validations
validateForm.onSuccess(() => {
  const formData = new FormData(formEl);

  // Pushing the id, dataAndTime and IpAddress into the form
  formData.append("id", uuidv4());
  formData.append("dateAndTime", dateAndTime.value);
  formData.append("ipAddress", ipAddressPlaceholder.value);

  const formValueObj = Object.fromEntries(formData.entries());

  const existingData = localStorage.getItem(localStorageKey);

  // Parse the data
  const existingDataArr = JSON.parse(existingData);
  const newUser = [];

  if (existingDataArr) {
    // push existing data into new array;
    existingDataArr.push(formValueObj);
    localStorage.setItem(localStorageKey, JSON.stringify(existingDataArr));
  } else {
    newUser.push(formValueObj);
    localStorage.setItem(localStorageKey, JSON.stringify(newUser));
  }

  alert("You have Registered successfully!");
  window.location.href = "./login.html";

  formEl.reset();
});
