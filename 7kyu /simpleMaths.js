//Simple Maths Test 
//Create a function which checks a number for three different perspective 
// is the number prime? 
// is the number even? 
// is the number a multiple of 10? 

// Each should return either true or false, which should be given as an array. 
// Remark: The Haskell variant uses data Property. 

function numberProperty(n) {
    for(var i = 2; i < n i++) {
        if(n % i === 0) return false; 
    }

    return n > 1; 
}