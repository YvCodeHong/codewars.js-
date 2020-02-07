// No oddities here 

// Write a small function that returns the values of an array 
//that are not odd. 

//All values in the array will be integers. Return the good 
//values in the order they are given. 

function noOdds(values){
    var array = [];
    for(var i = 0; i<values.length; i++){
        if(values[i] % 2 === 0){
            array.push(values[i])
        }
    }
    return array;
}

//shortcut to noOdds

const noOdds = values => values.filter(n => !(n % 2));