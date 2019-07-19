//Sum of odd Numbers 

//Given the triangle of consecutive odd numbers: 
//   1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...

//Calculate the row sums of this triangle from the row index
//(starting at index 1) e.g: 

//rowSumOddNumbers(1); //1
//rowSumOddNumbers(2); //3 + 5 = 8


function rowSumOddNumbers(n) {
    let start = n * (n - 1) + 1;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += start + (i * 2);
    } 
}


//other ways of solving the problem: 

function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}
