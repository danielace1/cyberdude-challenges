# Loop Concepts (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #5 : Create a Array of Objects and loop through it. Discuss about various looping options.

```js
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
```

### Live link:

[Live Link](https://danielace1.github.io/cyberdude-challenges/javascript/01-vanilla-js/06-loop-concepts/)

## Acknowledgement:

🎉 Special thanks to [Anbuselvan Rocky](https://github.com/anburocky3) for his valuable mentorship.

## References:

[![loop-concepts](https://img.youtube.com/vi/tMgXbOs0jLc/0.jpg)](https://www.youtube.com/watch?v=tMgXbOs0jLc "loop-concepts")
