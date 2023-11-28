// Defining Funtions

// Expression
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
  console.log(`The area of the rectangle is: ${area} square units`);
}

// Return
// function greetUser2(firstName, lastName) {
//   return `My name is ${firstName} ${lastName}`;
// }
// const fullName = greetUser2("Sudharsan", "Daniel");
// console.log("Return: ", fullName);

// IIFE
const factorial = (() => {
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
