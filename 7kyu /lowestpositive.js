//Create a function that returns the sum of the two lowest numbers
//given an array of minimum 4 positive integers. No floats 
// or non positive integers will be passed. 

//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

//1. Enter the arrays, e.g: [19, 5, 42, 2, 77];
//2. Take 5, 2 
//3. Add 5 + 2
//4. Output: 7 

function sumTwoSmallestNumbers(numbers) {
    var arr = numbers.sort(function(x, y) {
        return x -y; 
    });
    return arr[0] + arr[1];
}

//Cleaver solution (found on the internet); 

function sumTwoSmallestNumbers(numbers) {
    var[a, b] = numbers.sort((a, b) => a -b) 
    return a + b 
}