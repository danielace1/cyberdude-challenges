// Loop Concepts
const students = [
  { name: "Alice", age: 22, subject: "Computer Science" },
  { name: "Bob", age: 21, subject: "Mathematics" },
  { name: "Charlie", age: 23, subject: "Physics" },
  { name: "David", age: 22, subject: "Biology" },
];

// 1. For Loop
console.log("1. For Loop:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// 2. For...of Loop
console.log("\n2. For...of Loop:");
for (let student of students) {
  console.log(student);
}

// 3. For...in Loop
console.log("\n2. For...in Loop:");
for (let student in students) {
  console.log(students[student]);
}

// 4. ForEach Loop
console.log("\n3. ForEach Loop:");
students.forEach((student) => {
  console.log(student);
});

// 5. While Loop
console.log("\n4. While Loop:");
let i = 0;
while (i < students.length) {
  console.log(students[i]);
  i++;
}

// 6. Do...While Loop
console.log("\n5. Do...While Loop:");
let s = 0;
do {
  console.log(students[s]);
  s++;
} while (s < students.length);
