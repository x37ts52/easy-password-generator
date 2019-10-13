const easyPasswordGenerator = require('./easy-password-generator')

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
