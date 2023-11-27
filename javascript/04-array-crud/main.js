// Array -CRUD(Create, Read, Update and Delete)
const fruits = ["apple", "banana", "grapes"];

// Create
fruits.push("orange", "papaya");
fruits.unshift("gauva");
fruits.splice(3, 0, "watermelons", "coconut");
console.log("create: ", fruits);

// Read
for (let fruitsName of fruits) {
  console.log("fruitsName: ", fruitsName);
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

// Update
const delivery = items.some((value) => {
  return value.isDeliverable == true;
});
console.log("isavail", delivery);

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
