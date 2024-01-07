import students from "./students.json";

const studentsListEl = document.querySelector("#students");

for (let student of students) {
  studentsListEl.innerHTML += `<div class='each-student'>
  <div><img src=${student.image}></div>
   Roll.No: ${student["roll.no"]} <br>
   Name: ${student.name} <br>
   Age: ${student.age} <br>
   Major: ${student.isMajor}</div>`;
}
