// Easy Questions

// Double an Array
// Task: Write a function that doubles all the numbers in an array using map.
// - Input: `[1, 2, 3]`
// - Output: `[2, 4, 6]`
 
const num = [1, 2, 3, 4];
const res = num.map(num=>num*2);
console.log(res);

//  Filter Odd Numbers
// Task: Write a function that filters out odd numbers from an array using filter.
// - Input: `[1, 2, 3, 4]`
// - Output: `[2, 4]`
const n = [1, 2, 3, 4];
const r = n.filter((el)=>{
    if(el%2==0){
        return el;
    }
})
console.log(r);

//  Capitalize Strings
// Task: Write a function to capitalize the first letter of each string in an array using map.
// - Input: `['hello', 'world']`
// - Output: `['Hello', 'World']`

const str = ['hello', 'world'];
const r1 = str.map((el)=>{
    return el.charAt(0).toUpperCase() + el.slice(1);
})
console.log(r1);

//  Sum of Array Elements
// Task: Use forEach to find the sum of all numbers in an array.
// - Input: `[1, 2, 3]`
// - Output: `6`
const sum = [1, 2, 3];
let sum1 = 0;
sum.forEach(el=>sum1 += el)
console.log(sum1);

//  Get Object Property Values
// Task: Write a function that extracts the name property from an array of objects using map.
// - Input: `const users = [{ name: 'Alice' }, { name: 'Bob' }];`
// - Output: `['Alice', 'Bob']`
const users = [{ name: 'Alice' }, { name: 'Bob' }];
let a =users.map(el=>el.name);
console.log(a);

//  Filter by String Length
// Task: Write a function to filter out strings longer than 3 characters using filter.
// - Input: `['a', 'abc', 'abcd']`
// - Output: `['a', 'abc']`
const b = ['a', 'abc', 'abcd']
let A = b.filter(el=>{return el.length<=3});
console.log(A);

//  Square Numbers
// Task: Write a function to return an array of squared numbers using map.
// - Input: `[1, 2, 3]`
// - Output: `[1, 4, 9]`
const c = ['1', '2', '3'];
let ans = c.map(el=>el*el)
console.log(ans);

//  Count Even Numbers
// Task: Use forEach to count the number of even numbers in an array.
// - Input: `[1, 2, 3, 4]`
// - Output: `2`
const count = [1, 2, 3, 4];
let count1 = 0;
count.forEach(el=>{
    if(el%2==0){
        count1++
    }
});
console.log(count1);


//  Convert to Uppercase
// Task: Write a function that converts all strings in an array to uppercase using map.
// - Input: `['a', 'b', 'c']`
// - Output: `['A', 'B', 'C']`
const input = ['a','b','c']
let output = input.map(el=>el.toUpperCase())
console.log(output);

//  Filter Null or Undefined Values
// Task: Write a function to filter out null and undefined values from an array using filter.
// - Input: `[1, null, 2, undefined, 3]`
// - Output: `[1, 2, 3]`

const ab = [1, null,2,undefined,3];
let ac = ab.filter(el=>el!=null && el!=undefined);
console.log(ac);

