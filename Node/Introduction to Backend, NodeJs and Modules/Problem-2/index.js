const factorial = require('./factorial')

const numbers = [5, 7, 10, -3, "hello", 0]

numbers.forEach((num) => {
  const result = factorial(num)
  
  if (typeof result === 'string') {
    console.log(`Input: ${num} -> ${result}`)
  } else {
    console.log(`Factorial of ${num} is: ${result}`)
  }
});
