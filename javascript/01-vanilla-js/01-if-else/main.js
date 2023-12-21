//  if else task - Guess an number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100 + 1);

while (true) {
  const number = prompt("Guess a number between 1 and 100: ");

  if (number === null) {
    alert("Thanks for playing");
    break;
  }

  const onlyNumber = parseInt(number);

  if (isNaN(onlyNumber)) {
    alert("Please enter only number");
    continue;
  }

  if (onlyNumber === randomNumber) {
    alert("Your guess is correct");
    break;
  } else if (onlyNumber > randomNumber) {
    alert("Your guess is too high");
  } else {
    alert("Your guess is too low");
  }
}
