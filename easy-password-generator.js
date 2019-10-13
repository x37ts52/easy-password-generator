// function: password with specified letter length to generate
const easyPasswordGenerator = options => {
  const numbers = '0123456789'
  const charactersUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVW'
  const charactersLowerCase = 'abcdefghijklmnopqrstuvw'
  let result = ''

  // if: generate digit, uppercase and lowercase password
  if (
    options.digits === true &&
    options.letters === true &&
    options.letterCase.upperCase === true &&
    options.letterCase.lowerCase === true
  ) {
    let concatStrings = charactersUpperCase.concat(charactersLowerCase, numbers)

    for (let i = 0; i < options.length; i++) {
      result += concatStrings.charAt(Math.floor(Math.random() * concatStrings.length))
      // TODO: MUST CHECK FOR ONE DIGIT, ONE UPPERCASE AND ONE LOWERCASE
    }
  }

  // if: generate uppercase and lowercase password
  if (
    options.digits === false &&
    options.letters === true &&
    options.letterCase.upperCase === true &&
    options.letterCase.lowerCase === true
  ) {
    let concatStrings = charactersUpperCase.concat(charactersLowerCase)

    for (let i = 0; i < options.length; i++) {
      result += concatStrings.charAt(Math.floor(Math.random() * concatStrings.length))
    }
  }

  // if: generate digit password
  if (options.digits === true && options.letters === false) {
    for (let i = 0; i < options.length; i++) {
      result += numbers.charAt(Math.floor(Math.random() * numbers.length))
    }
  }

  // if: generate uppercase password
  if (
    options.digits === false &&
    options.letters === true &&
    options.letterCase.upperCase === true &&
    options.letterCase.lowerCase === false
  ) {
    for (let i = 0; i < options.length; i++) {
      result += charactersUpperCase.charAt(Math.floor(Math.random() * charactersUpperCase.length))
    }
  }

  // if: generate lowercase password
  if (
    options.digits === false &&
    options.letters === true &&
    options.letterCase.upperCase === false &&
    options.letterCase.lowerCase === true
  ) {
    for (let i = 0; i < options.length; i++) {
      result += charactersLowerCase.charAt(Math.floor(Math.random() * charactersLowerCase.length))
    }
  }

  return result
}

module.exports = easyPasswordGenerator
