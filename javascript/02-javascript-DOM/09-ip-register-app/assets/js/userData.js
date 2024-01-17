// Retrieve the stored user data from localStorage
const localStorageKey = "userId";
const storedUserData = localStorage.getItem(localStorageKey);

// Parse the JSON data
const userData = storedUserData ? JSON.parse(storedUserData) : [];

console.log(userData);

// Save the data in from localStorage
const tableEl = document.querySelector("#userDataTable");

const finalValue = [];

userData.map((userDetails, index) => {
  const trEl = document.createElement("tr");
  const idNoEl = document.createElement("td");
  const fullNameEl = document.createElement("td");
  const userNameEl = document.createElement("td");
  const emailEl = document.createElement("td");
  const ipAddressEl = document.createElement("td");
  const registeredTimeEl = document.createElement("td");
  const td6El = document.createElement("td");
  const deleteBtnEl = document.createElement("button");

  idNoEl.classList.add("px-3", "py-2", "border", "whitespace-nowrap");
  idNoEl.textContent = index + 1;

  fullNameEl.classList.add("px-3", "py-2", "border", "whitespace-nowrap");
  fullNameEl.textContent = userData[1].firstname + " " + userData[1].lastname;

  userNameEl.classList.add("px-3", "py-2", "border", "whitespace-nowrap");
  userNameEl.textContent = userData[1].username;

  emailEl.classList.add("px-3", "py-2", "border", "whitespace-nowrap");
  emailEl.textContent = userData[1].email;

  ipAddressEl.classList.add("px-3", "py-2", "border", "whitespace-nowrap");
  ipAddressEl.textContent = userData[0];

  registeredTimeEl.classList.add("px-3", "py-2", "border", "whitespace-nowrap");
  registeredTimeEl.textContent = userData[2];

  const deleteIcon = `<svg
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
    idNoEl,
    fullNameEl,
    userNameEl,
    emailEl,
    ipAddressEl,
    registeredTimeEl,
    deleteBtnEl
  );

  finalValue.push(trEl);
});

finalValue.forEach((el) => tableEl.append(el));
