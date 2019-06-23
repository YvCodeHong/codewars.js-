//Complete the function which takes two arguments and return 
//all numbers which are divisible by the given divisor. 
//First argument is an array of numbers and the second is the divsior. 

function divisibleBy(numbers, divisor) {
    return numbers.filter(num => num % divisor === 0)
}

//ES6 

const divisibleBy = (numbers, divisor) =>
    numbers.filter(num => num % divisor === 0)

