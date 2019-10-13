# easy-password-generator

## What is this?

The easy-password-generator generate simple passwords with a self choosen length and self choosen combination of digits and characters

## Install

```javascript
npm i easy-password-generator
```

## How to use it?

```javascript
const easyPasswordGenerator = require('easy-password-generator')

// use the object to interact with the module
const options = {
  length: 10,
  digits: true,
  letters: true,
  letterCase: {
    upperCase: true,
    lowerCase: true
  }
}

// fire the object with the function
const password = easyPasswordGenerator(options)

// console output for testing: boolean
console.log(password)
```

## Options (input / output)

### Input

| Parameter              | Type    | Description                |
| ---------------------- | ------- | -------------------------- |
| length                 | numbers | The lenght of the password |
| digits                 | boolean | Put digits in password     |
| letters                | boolean | Put letters in password    |
| lettersCase: upperCase | boolean | Uppercase?                 |
| lettersCase: lowerCase | boolean | Lowercase?                 |

### Output

| Type   | Description                   |
| ------ | ----------------------------- |
| string | Return the generated password |

## License

MIT
