//Are they the "same"? 
//Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure)
//that checks whether two two arrays have the "same" elements, with the same 
//multiplicities. "Same" means,here, that the elements in b are the elements 
// in a squared, regardless of the order. 

function comp(array1, array2) {
    if (array1 === null || array2 === null)
        return false;
        if(array1.length != array2.length)
        return false;
        array1 = array1.sort((a, b) => a-b);
        array2 = array2.sort((a, b) => a-b);
        for (let i = 0; i < array1.length; i++)
        {
            if(array2[i] != array1[i] * array1[i])
                return false;
        }
        return true; 
}

//short version

function comp(array1, array1) {
    if(array1 == null || array2 == null) return false; 
    array1.sort((a, b) => a - b); array2.sort((a, b) => a -b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
}
