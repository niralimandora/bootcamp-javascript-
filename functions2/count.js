// Question 10:
// Define a function called countDigits that takes a positive integer as input and returns the number of digits it has.
// Test Case:
// Input: 12345
// Expected Output: 5

// function countDigits(num) {
//     return num.toString().length;
// }

// console.log(countDigits(12345)); // Output: 5


function countDigits(num)
{
    let count = 0;
    for(let i = 0; i < num.toString().length; i++)
    {
        count++; 
    }
    return count;
}

console.log(countDigits(1234556244))