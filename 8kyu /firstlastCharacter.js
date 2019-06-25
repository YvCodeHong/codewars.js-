//It's pretty straightforward. Your goal is to create a function that 
//removes the first and last character of a string. You've given one 
// parameter, the original string. You don't have to worry with 
//strings with less than two characters. 

function removeChar(str) {
    return str.substr(1).slice(0, -1);
};