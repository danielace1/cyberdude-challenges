# Defining Functions (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #5 : Create different ways of defining functions and explain it in detail with examples.
>
> - expression
> - return it
> - pass arguments, receive parameters
> - IIFE.

```js
// Defining Funtions

// Declaration - Area of a rectangle
function rectangleInputs() {
  const length = parseFloat(prompt("Enter the length of the rectangle:"));
  const breadth = parseFloat(prompt("Enter the breadth of the rectangle:"));

  if (isNaN(length) || isNaN(breadth)) {
    alert("Please enter only numbers.");
    return;
  }

  const area = calculateRectangleArea(length, breadth);
  displayResult(area);
}

rectangleInputs();

function calculateRectangleArea(length, breadth) {
  return length * breadth;
}

function displayResult(area) {
  console.log(`The area of the rectangle is: ${area} sq.units`);
}

// Return
function greetUser2(firstName, lastName) {
  return `My name is ${firstName} ${lastName}`;
}
const fullName = greetUser2("Sudharsan", "Daniel");
console.log("Return: ", fullName);

// Expression
const checkEvenOrOdd = function (number) {
  if (number % 2 === 0) {
    return `${number} is Even`;
  } else {
    return `${number} is Odd`;
  }
};

const result1 = checkEvenOrOdd(10);
const result2 = checkEvenOrOdd(5);

console.log(result1);
console.log(result2);

// IIFE - Factorial of a number
(() => {
  const userInput = parseInt(
    prompt("Enter a number to calculate its factorial:")
  );

  function calculateFactorial(num) {
    if (num <= 1) {
      return 1;
    } else {
      return num * calculateFactorial(num - 1);
    }
  }

  function displayResult(number, result) {
    console.log(`The factorial of ${number} is: ${result}`);
  }

  if (isNaN(userInput) || userInput < 0) {
    alert("Please enter only positive numbers.");
    return;
  } else {
    const result = calculateFactorial(userInput);
    displayResult(userInput, result);
  }
})();
```

### Live link:

[Live Link](https://danielace1.github.io/cyberdude-challenges/javascript/01-vanilla-js/05-defining-functions/)

## Acknowledgement:

🎉 Special thanks to [Anbuselvan Rocky](https://github.com/anburocky3) for his valuable mentorship.

## References:

[![Defining-functions](https://img.youtube.com/vi/xqkGxTdVWfw/0.jpg)](https://www.youtube.com/watch?v=xqkGxTdVWfw "Defining-functions")
