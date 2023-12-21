// Objects - CRUD (Create, Read, Update and Delete)
const personDetails = {
  firstName: "Sudharsan",
  lastName: "Daniel",
  age: 18,
  studying: "Computer Science Engineering",
  isStudent: true,
  fullname() {
    return `My name is ${this.firstName} ${this.lastName} and I'm studying ${this.studying}`;
  },
  hobbies: ["listening music", "playing games"],
  contact: {
    mobile: 7708749693,
    location: "Tirunelveli",
  },
};

// Create
personDetails.gender = "Male";
personDetails.contact.country = "India";
personDetails.hobbies.push("watching movies");
console.log(personDetails);

// Read
if (personDetails.age < 18) {
  console.log("You are a minor");
} else {
  console.log("You are major now");
}
console.log("firstName:", personDetails.firstName);
console.log("lastName:", personDetails.lastName);
console.log("age:", personDetails.age);
console.log("isStudent:", personDetails.isStudent);
console.log("gender:", personDetails.gender);
console.log(personDetails.fullname());

// Update
personDetails.age = 20;
personDetails.contact.location = "Chennai";
console.log("updated details:", personDetails);

// Delete
delete personDetails.isStudent;
delete personDetails.contact.location;
console.log("delete:", personDetails);
