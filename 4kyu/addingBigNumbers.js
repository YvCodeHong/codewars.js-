//Adding Big Numbers 
// We need to sum big numbers and we require your help. 
//Write a function that returns the sum of two numbers. The input numbers are 
//strings and the function must return a string 

//Example: 
// add("123", "321"); - > "444"
// add("11", "99"); -> "110"

// Notes
// 1. The input numbers are big 
//2. The input is a string of only digits. 
//3. The numbers are positives. 


function add(a, b) {
    var res = '', c = 0
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || c) {
        c += ~~a.pop() + ~~b.pop()
        res = c % 10 + res
        c = c > 9
    }
    return res 
}