//Century Year 
//The first century spans from the year 1 up to and including the year 100. The second - from the year 101 upto
// and including the year 200, etc. 

//Task: 
//Given a year, return the century it is in. 
// Input, Output Examples::
// centuryFromYear(1705)  returns(18)
// centuryFromYear(1900)  returns(19)
// centuryFromYear(1601)  returns(17)
// centuryFromYear(2000)  returns(20)
// Hope you enjoy it..Awaiting for Best Practice Codes

// Enjoy Learning!!!

const century = year => { 
    const result = String(year / 100).split('.')
    return result.length === 2 ? Number(result[0]) + 1 : Number(result[0])
}


//Short solution 

const century = year => 
    year % 100 === 0 ? parseInt(year / 100, 0) : parseInt(year / 100, 0) + 1
