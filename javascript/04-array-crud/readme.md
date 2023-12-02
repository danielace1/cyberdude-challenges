# Array-crud (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #4 : Create an Array (Primitive & Reference) that functions CRUD Operation.

```js
// Array -CRUD(Create, Read, Update and Delete)
const fruits = ["apple", "banana", "grapes"];

// Create
fruits.push("orange", "papaya");
fruits.unshift("gauva");
fruits.splice(3, 1, "watermelons", "coconut");
console.log("create: ", fruits);

// Read
for (let fruitsName of fruits) {
  console.log("fruitName: ", fruitsName);
}
console.log("Index: ", fruits.indexOf("banana"));
console.log("Includes: ", fruits.includes("banana"));

// Update
fruits[1] = "Strawberry";
console.log("updated: ", fruits);

// Delete
fruits.splice(1, 1);
console.log("spliced: ", fruits);
fruits.slice(0, 1);
console.log("sliced: ", fruits);
fruits.pop();
console.log("pop:", fruits);
fruits.shift();
console.log("shift:", fruits);
fruits.length = 0;
console.log("length: ", fruits);

// Array of Objects
const items = [
  { id: 1, name: "Mobile", isDeliverable: true },
  { id: 2, name: "Accessories", isDeliverable: true },
  { id: 3, name: "Television", isDeliverable: false },
];

// Create
items.push({ id: 4, name: "Fan", isDeliverable: false });
console.log("create: ", items);

// Read
items.forEach((item) => {
  console.log("read: ", item);
});
const delivery = items.some((value) => {
  return value.isDeliverable == true;
});
console.log("isavail", delivery);

// filter method
const delivery = items.filter((value) => {
  return value.isDeliverable == true;
});
console.log("isavail using filter: ", delivery);

// Update
const recipe = items.concat(fruits);
console.log("concate:", recipe);
const spreadOperator = [...fruits, ...items];
console.log("spreadOperator: ", spreadOperator);
items[0].name = "Laptop";
console.log("updated: ", items);

// Delete
items.splice(0, 4);
console.log("delete: ", items);
```

### Live link:

[Live Link](https://danielace1.github.io/cyberdude-challenges/javascript/04-array-crud/)

## Acknowledgement:

🎉 Special thanks to [Anbuselvan Rocky](https://github.com/anburocky3) for his valuable mentorship.

## References:

[![Array-crud](https://img.youtube.com/vi/Amu-MKgfkpk/0.jpg)](https://www.youtube.com/watch?v=Amu-MKgfkpk "Array-crud")
