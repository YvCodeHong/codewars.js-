//Task 
//Given three integers a,b,c, return the largest number
//obtained after inserting the following operators and brackets: 
//+, *, ().

const expressionMatter = (a, b, c) => Math.max(...[a * (b + c), a * b * c, a + b + c, (a + b) * c])