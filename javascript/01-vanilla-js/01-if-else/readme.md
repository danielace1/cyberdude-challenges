# If-Else (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #1: Create a if-else condition with all possible conditions

```js
//  if else game - Guess an number between 1 and 100
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
```

### Live link:

[Live Link](https://danielace1.github.io/cyberdude-challenges/javascript/01-vanilla-js/01-if-else/)

## Acknowledgement:

🎉 Special thanks to [Anbuselvan Rocky](https://github.com/anburocky3) for his valuable mentorship.

## References:

[![If-Else-Conditional Statement](https://img.youtube.com/vi/WebG_D9-U80/0.jpg)](https://www.youtube.com/watch?v=WebG_D9-U80 "If-Else Conditional Statement")
