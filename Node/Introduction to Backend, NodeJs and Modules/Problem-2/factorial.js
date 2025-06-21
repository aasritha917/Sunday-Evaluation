function factorial(n) {
 
  if (typeof n !== 'number' || isNaN(n)) {
    return 'Invalid input'
  }

  if (n < 0) {
    return 'Factorial is not defined for negative numbers'
  }

  if (n === 0) return 1

  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }

  return result
}

module.exports = factorial
