// //Define two functions, double and square, where double doubles a number and square squares a number.
//  Create a function named doubleSquare that takes a number as input, doubles it using the double function,
//   and then squares the result using the square function.
// Test Case:
// Input: doubleSquare(3)
// Expected Output: 36

function doubleSquare(n)
{
    let d = n*2
    let ans = d*d
    return ans
}

console.log(doubleSquare(3)) // Should print 36