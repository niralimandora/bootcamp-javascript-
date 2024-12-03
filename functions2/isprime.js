// Question 8:
// Write a function called isPrime that takes a number as input and returns true if it's a prime number, and false otherwise.
// Test Cases:
// Input: 7
// Expected Output: true
// Input: 10
// Expected Output: false

function prime(number) 
{
    if(number % 2 ==0)
    {
        return false;
    }
    else 
    {
        console.log('prime number')
    }
}
prime(7)// Expected Output: true