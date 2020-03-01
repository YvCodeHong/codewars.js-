/* 
Sort Out The Men from Boys 

Now that the competition gets tough it will Sort out the men 
from the boys. 

Men are the Even numbers and Boys are the odd

Task 

Given an array/list[] of nn integers, Separate The even numbers from the odds, 
or Separate the men from the boys 


Notes
Return an array/list where Even numbers come first then odds

Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .

Array/list size is at least *4*** .

Array/list numbers could be a mixture of positives , negatives .

Have no fear , It is guaranteed that no Zeroes will exists . !alt

Repetition of numbers in the array/list could occur , So (duplications are not included when separating).

*/
const menFromBoys = arr => {
    const arrWithoutDuplicates = [...new Set(arr)]
    const evenNumbers = arrWithoutDuplicates.filter(number => number % 2 === 0).sort((a, b) => a - b)
    const oddNumbers = arrWithoutDuplicates.filter(number => number % 2 !== 0).sort((a, b) => b - a)

    return [...evenNumbers, ...oddNumbers]
}


