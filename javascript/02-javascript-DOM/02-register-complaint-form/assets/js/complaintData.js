const localStorageKey = "complaintData";

export function getAllComplaintDatas() {
  // Getting the stored data from localstorage
  const complaintData = localStorage.getItem(localStorageKey);
  const complaintDataArr = JSON.parse(complaintData);

  if (complaintDataArr && complaintDataArr.length > 0) {
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

      tdComplaintNo.classList.add("px-3", "py-2", "border");
      tdComplaintNo.textContent = index + 1;

      complainCategoryEl.classList.add("px-3", "py-2", "border");
      complainCategoryEl.textContent = complaintData["complain-category"];

      victimNameEl.classList.add("px-3", "py-2", "border");
      victimNameEl.textContent = complaintData["victim-name"];

      victimMobileNo.classList.add("px-3", "py-2", "border");
      victimMobileNo.textContent = complaintData["victim-mobile-number"];

      victimCollegeNameEl.classList.add("px-3", "py-2", "border");
      victimCollegeNameEl.textContent = complaintData["victim-college-name"];

      collegeCodeEl.classList.add("px-3", "py-2", "border");
      collegeCodeEl.textContent = complaintData["college-code"];

      deleteBtnEl.className =
        "px-2 py-1 rounded bg-red-500 hover:bg-red-600 text-white text-sm";
      deleteBtnEl.textContent = "Delete";

      deleteBtnEl.addEventListener("click", (e) => {
        deleteComplaintData(complaintData);
      });

      td6El.classList.add("px-3", "py-2", "border");
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
  } else {
    // complaintDetails.classList.add("hidden");
    // console.log("No value available on localStorage");
  }
}
