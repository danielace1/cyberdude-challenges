import Justvalidate from "just-validate";

const formEl = document.getElementById("complaint-form");

const validateForm = new Justvalidate(formEl, {
  validateBeforeSubmitting: true,
});

validateForm.addField(
  "#complain-category",
  [
    {
      rule: "required",
      errorMessage: "Complain Category is required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 20,
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

validateForm.addField(
  "#victim-name",
  [
    {
      rule: "required",
      errorMessage: "Victim name is required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 20,
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

validateForm.addField(
  "#victim-mobile-number",
  [
    {
      rule: "required",
      errorMessage: "Victim Mobile number is required",
    },
    {
      rule: "number",
    },
    {
      rule: "minLength",
      value: 10,
    },

    {
      rule: "maxLength",
      value: 10,
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

validateForm.addRequiredGroup("#gender", "Please select a gender", {
  errorLabelCssClass: ["form-error"],
});

validateForm.onSuccess(() => {});
