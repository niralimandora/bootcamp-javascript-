// Write a function named printMultiplicationTable that takes a number as input and prints its multiplication table from 1 to 10.
// Test Case:
// Input: printMultiplicationTable(3)
// Expected Output:
// 1 * 3 = 3
// 2 * 3 = 6
// 3 * 3 = 9
// 4 * 3 = 12
// 5 * 3 = 15
// 6 * 3 = 18
// 7 * 3 = 21

function table(i)
{
    for(let j=1;j<=10;j++)
    {
        console.log(i + " * " + j + " = " + j*i);
    }
}

table(10);