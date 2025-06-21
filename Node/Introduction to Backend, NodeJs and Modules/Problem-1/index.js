const isPrime = require('./isPrime')

const numbers = [2, 10, 17, 21, 29, -1, 'abc']

numbers.forEach((num) => {
  const result = isPrime(num)

  if (result === 'Invalid input') {
    console.log(`${num} is not a valid number.`)
  } else if (result) {
    console.log(`${num} is a prime number.`)
  } else {
    console.log(`${num} is not a prime number.`)
  }
})
