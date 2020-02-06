//Reversed Strings 
//Complete the solution so that it reverses the string value passed into it. 
//solution('world'); // returns 'dlrow'


//Step 1. Use the split() method to return a new array 
//Step 2. Use the reverse() method to reverse the new created array
//Step 3. Use the join() method to join all elements of the array into a string. 
//Step 4. Return the reversed string 

function solution(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

solution("world");


//short cut 

