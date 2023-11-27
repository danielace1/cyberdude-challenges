# Objects-crud (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #3 : Create an Object About Your Self, and You Should Manipulate the Object as well (Create, Read, Update, Delete).

```js
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
```

### Live link ->

[Live Link](https://danielace1.github.io/cyberdude-challenges/javascript/03-object-crud/)

## Acknowledgement:

🎉 Special thanks to [Anbuselvan Rocky](https://github.com/anburocky3) for his valuable mentorship.

## References:

[![Objects-OOP](https://img.youtube.com/vi/iKD8RZoXrLQ/0.jpg)](https://www.youtube.com/watch?v=WebG_D9-U80 "Objects-OOP")
