import Justvalidate from "just-validate";
import { v4 as uuidv4 } from "uuid";

const formEl = document.getElementById("complaint-form");

const localStorageKey = "complaintData";

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
      errorMessage: "Victim Name is required",
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

validateForm.addField(
  "#victim-email",
  [
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
  "#victim-college-name",
  [
    {
      rule: "required",
      errorMessage: "College Name is required",
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

validateForm.addField(
  "#college-code",
  [
    {
      rule: "required",
      errorMessage: "College Pin Code is required",
    },
    {
      rule: "number",
    },

    {
      rule: "maxLength",
      value: 6,
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

validateForm.addField(
  "#ragging-details",
  [
    {
      rule: "required",
      errorMessage:
        "Enter the Ragging Details. According to that we can take the necessay actions.",
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);

validateForm.onSuccess(() => {
  const formData = new FormData(formEl);

  formData.append("id", uuidv4());

  const formValueObj = Object.fromEntries(formData.entries());

  // Getting existing data from localstorage
  const existingData = localStorage.getItem(localStorageKey);

  // Parse the data
  const existingDataArr = JSON.parse(existingData);

  const newComplaintData = [];

  if (existingDataArr) {
    // push existing data into new array
    existingDataArr.push(formValueObj);

    localStorage.setItem(localStorageKey, JSON.stringify(existingDataArr));
  } else {
    newComplaintData.push(formValueObj);

    localStorage.setItem(localStorageKey, JSON.stringify(newComplaintData));
  }

  alert("Complaint Registered successfully!");

  // Complaint Details show/hide
  const complaintDetailsShow = document.querySelector("#complaintDetails");
  complaintDetailsShow.classList.remove("hidden");
  complaintDetailsShow.addEventListener("click", () => {
    const complaintDetails = document.querySelector("#complaintDetailsTable");
    if (complaintDetails.classList.contains("hidden")) {
      complaintDetailsShow.textContent = "Hide Complaint Details";
      complaintDetails.classList.remove("hidden");
      complaintDetailsShow.className =
        "px-3 py-2 text-sm lg:text-[16px] lg:px-6 lg:py-3 bg-green-500 text-white font-semibold rounded hover:cursor-pointer hover:bg-green-600 transition";
    } else {
      complaintDetailsShow.textContent = "View Complaint Details";
      complaintDetails.classList.add("hidden");
    }
  });

  getAllComplaintDatas();
  formEl.reset();
});

function getAllComplaintDatas() {
  // Getting the stored data from localstorage
  const complaintData = localStorage.getItem(localStorageKey);
  const complaintDataArr = JSON.parse(complaintData);

  // Save the data in complaintData file
  const tableEl = document.querySelector("#complaintDataTable");

  tableEl.innerHTML = "";

  const finalValue = [];

  complaintDataArr.map((complaintData, index) => {
    const trEl = document.createElement("tr");
    const complainCategoryEl = document.createElement("td");
    const tdComplaintNo = document.createElement("td");
    const victimNameEl = document.createElement("td");
    const victimMobileNo = document.createElement("td");
    const victimCollegeNameEl = document.createElement("td");
    const collegeCodeEl = document.createElement("td");
    const td6El = document.createElement("td");
    const deleteBtnEl = document.createElement("button");

    tdComplaintNo.classList.add("px-3", "py-2", "border", "whitespace-nowrap");
    tdComplaintNo.textContent = index + 1;

    complainCategoryEl.classList.add(
      "px-3",
      "py-2",
      "border",
      "whitespace-nowrap"
    );
    complainCategoryEl.textContent = complaintData["complain-category"];

    victimNameEl.classList.add("px-3", "py-2", "border", "whitespace-nowrap");
    victimNameEl.textContent = complaintData["victim-name"];

    victimMobileNo.classList.add("px-3", "py-2", "border", "whitespace-nowrap");
    victimMobileNo.textContent = complaintData["victim-mobile-number"];

    victimCollegeNameEl.classList.add(
      "px-3",
      "py-2",
      "border",
      "whitespace-nowrap"
    );
    victimCollegeNameEl.textContent = complaintData["victim-college-name"];

    collegeCodeEl.classList.add("px-3", "py-2", "border", "whitespace-nowrap");
    collegeCodeEl.textContent = complaintData["college-code"];

    const deleteIcon = `   <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 24 24"
      class="fill-current text-red-600 hover:cursor-pointer hover:text-red-700 lg:w-8 lg:h-8 md:w-6 md:h-6"
    >
      <path
        d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
      />
    </svg>`;

    deleteBtnEl.innerHTML = deleteIcon;

    deleteBtnEl.addEventListener("click", () => {
      deleteComplaintData(complaintData);
    });

    td6El.classList.add("px-3", "py-2", "border", "whitespace-nowrap");
    td6El.append(deleteBtnEl);

    trEl.append(
      tdComplaintNo,
      complainCategoryEl,
      victimNameEl,
      victimMobileNo,
      victimCollegeNameEl,
      collegeCodeEl,
      td6El
    );

    finalValue.push(trEl);
  });

  finalValue.forEach((el) => tableEl.append(el));
}

function deleteComplaintData(deleteComplaintData) {
  const confirmation = confirm(
    `Do you want to delete '${deleteComplaintData["victim-name"]}' complaint?`
  );

  if (confirmation) {
    const existingData = localStorage.getItem(localStorageKey);

    const existingDataObj = JSON.parse(existingData);

    const otherComplaints = existingDataObj.filter(
      (complaints) => complaints.id != deleteComplaintData["id"]
    );

    console.log(otherComplaints);
    // Delete the data from localstorage
    localStorage.setItem(localStorageKey, JSON.stringify(otherComplaints));

    getAllComplaintDatas();
  }
}

getAllComplaintDatas();
