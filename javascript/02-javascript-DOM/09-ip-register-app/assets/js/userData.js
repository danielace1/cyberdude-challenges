// Retrieve the stored user data from localStorage
const localStorageKey = "userId";
const storedUserData = localStorage.getItem(localStorageKey);

// Parse the JSON data
const userData = storedUserData ? JSON.parse(storedUserData) : [];

console.log("userData", userData);

const userDetailsTableEl = document.querySelector("#userDetailsTable");

if (userData.length === 0) {
  const noDataFoundImg = document.querySelector("#noDataFoundImg");
  noDataFoundImg.classList.remove("hidden");
  userDetailsTableEl.classList.add("hidden");
} else {
  userDetailsTableEl.classList.remove("hidden");
}

function getUserData() {
  const tableEl = document.querySelector("#userDataTable");
  tableEl.innerHTML = "";

  const storedUserData = localStorage.getItem(localStorageKey);

  if (storedUserData) {
    const userData = JSON.parse(storedUserData);

    userData.forEach((userDetails, index) => {
      const trEl = document.createElement("tr");
      const idNoEl = document.createElement("td");
      const fullNameEl = document.createElement("td");
      const userNameEl = document.createElement("td");
      const emailEl = document.createElement("td");
      const ipAddressEl = document.createElement("td");
      const loginTimeEl = document.createElement("td");
      const td6El = document.createElement("td");
      const deleteBtnEl = document.createElement("button");

      idNoEl.classList.add("px-3", "py-2", "border", "break-words");
      idNoEl.textContent = index + 1;

      fullNameEl.classList.add("px-3", "py-2", "border", "break-words");
      fullNameEl.textContent =
        userDetails.firstname + " " + userDetails.lastname;

      userNameEl.classList.add("px-3", "py-2", "border", "break-words");
      userNameEl.textContent = userDetails.username;

      //  Show welcome alert for logged-in user
      const welcomeMessage = document.createElement("p");
      welcomeMessage.textContent = `Welcome, ${userDetails.username}! Your registration details are displayed below.`;
      welcomeMessage.classList.add(
        "text-green-600",
        "font-semibold",
        "mt-2",
        "text-center",
        "text-md",
        "md:text-lg",
        "lg:text-xl"
      );

      document.body.insertBefore(welcomeMessage, document.body.firstChild);
      document.querySelector("#welcomeMessage").append(welcomeMessage);

      document.addEventListener("DOMContentLoaded", () => {
        alert(`Welcome ${userDetails.username}`);
      });

      emailEl.classList.add("px-3", "py-2", "border", "break-words");
      emailEl.textContent = userDetails.email;

      // IP - Address
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          const cleanedIpAddress = xhr.responseText.trim();
          ipAddressEl.textContent = cleanedIpAddress;
        }
      };
      xhr.open("GET", "https://ipv4.icanhazip.com/");
      xhr.send();
      ipAddressEl.classList.add("px-3", "py-2", "border", "break-words");

      // Login Time
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
      const formattedDateAndTime = newDate.toLocaleString(
        "en-US",
        neededFormat
      );
      loginTimeEl.classList.add("px-3", "py-2", "border", "break-words");
      loginTimeEl.textContent = formattedDateAndTime;

      // Delete Btn
      const deleteIcon = `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          class="fill-current text-blue-600 hover:cursor-pointer hover:text-blue-700 mt-1 w-6 h-6 lg:w-7 lg:h-7"
        >
          <path
            d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
          />
        </svg>`;

      deleteBtnEl.innerHTML = deleteIcon;

      deleteBtnEl.addEventListener("click", () => {
        deleteUserData(userDetails);
      });

      td6El.classList.add("px-3", "py-2", "border", "break-words");
      td6El.append(deleteBtnEl);

      trEl.append(
        idNoEl,
        fullNameEl,
        userNameEl,
        emailEl,
        ipAddressEl,
        loginTimeEl,
        td6El
      );

      tableEl.append(trEl);
    });
  }
}

getUserData();

function deleteUserData(deleteUserData) {
  const confirmation = confirm(
    `Do you want to delete '${deleteUserData.username}' registration?`
  );

  if (confirmation) {
    const storedUserData = localStorage.getItem(localStorageKey);

    if (storedUserData) {
      const userData = JSON.parse(storedUserData);

      const updatedData = userData.filter(
        (user) => user.id !== deleteUserData.id
      );

      localStorage.setItem(localStorageKey, JSON.stringify(updatedData));
      getUserData(); // Update the UI after deletion
    }
  }
}
