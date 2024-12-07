// Question 6:
// Create a function named reverseString that takes a string as input and returns the reversed string.
// Test Case:
// Input: "hello"
// Expected Output: "olleh"

function reverseString(reverse) 
{
    let ans =''
    for(var i=reverse.length-1; i>=0; i--) {
        ans += reverse[i];
    }
    console.log(ans);
}

//let reverse = 'nirali'
reverseString('nirali') 