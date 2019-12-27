//Maximum Multiple 
// Task 
//Given a divsor and a bound, Find the largest Integer N, Such that, 

//Conditions: 

//* N is divisible by divisor 
//* N is less or equal to bound 
// * N is greater than 0

// Notes 
// The parameters(divisor, bound)passed to the function are only 
// positive values. 
// It's guaranteed that a divisor is Found 

function maxMultiple(divisor, bound) {
    return bound-bound%divisor
}