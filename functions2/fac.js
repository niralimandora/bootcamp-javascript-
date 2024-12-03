// Question 7:
// Define a function called calculateFactorial that takes a positive integer as input and returns its factorial.
// Test Case:
// Input: 5
// Expected Output: 120


function findFactorial(n) 
{
    let result = 1;
    for(let i = 1; i <= n; i++)
    {
        result *= i;
    }
    return result;
}

console.log(findFactorial(5)); 