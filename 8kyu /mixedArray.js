//Given an array of integers as strings and numbers, 
//return the sum of the array values as if all were 
//numbers. 

//Return your answer as a number. 

function sumMix(x) {
    let sum = 0; 
    x.map(function(element){
        sum += parseInt(element);
    })
    return sum; 
}

console.log(sumMix([1, '2', 3]));


//Another way 

function sumMix(x){
    return x.map(x => parseInt(x)).reduce((a,b) => a + b);
}

//one line code 

const sumMix = x => x.reduce((total, value) => total + Number(value), 0)

