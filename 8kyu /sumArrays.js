//Write a method(sum_array) in python, SumArray in C#) that takes an array of numbers 
// and returns the sum of the numbers. These manybe integers or decimals for Ruby and any 
//instance of Num for Haskell. The numbers can also be negative. If the array does not 
//contain any numbers then you should return 0. ß

//Examples
// numbers = [1, 5.2, 4, 0, -1]
// puts sum(numbers)
// 9.2


function sum(numbers){
    return numbers.reduce((acc, n) => acc + n, 0);
};