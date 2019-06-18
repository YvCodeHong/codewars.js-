// You will be given a number and you will need to return it as a string in Expanded Form.For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'


function expandedForm(num) {
    var digits = num.toString()
    var output = []

    for (var i = 0; i < digits.length; i++) {
        if (digits[i] > 0) {
            var zeros = ''
            // console.log(digits.length-i-1)
            for (var z = digits.length - i - 1; z > 0; z--) {
                // console.log(z)
                zeros += '0'
            }
            output.push(Number(digits[i] + zeros))
        }
    }
    return output.join(' + ')
}
