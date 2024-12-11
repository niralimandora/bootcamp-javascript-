//  Hard Questions

//  Create a Frequency Map
// Task: Write a function that uses reduce to create a frequency map of elements in an array.
// - Input: `['a', 'b', 'a']`
// - Output: `{ a: 2, b: 1 }`
const a1 = ['a', 'b', 'a'];
const obj = {};
a1.map(el => {
  if (obj[el]===undefined) {
    obj[el] = 1;
  } else {
    obj[el]++;
  }
});
console.log(obj);

//  Filter and Transform Objects
// Task: Filter out objects where price > 100, and then add a 10% discount to the remaining objects using map.
// - Input:
// const products = [{ price: 50 }, { price: 120 }, { price: 80 }];
// - Output: `[{ price: 45 }, { price: 72 }]`
// const products = [{ price: 50 }, { price: 120 }, { price: 80 }];
// const ans2 = products.map((el)=>{
//     if(el.price<100)
//         {
//             return {...el, price: el.price - (el.price*0.1)};
//         };
// });
// console.log(ans2);

const product = [{ price: 50 }, { price: 120 }, { price: 80 }]
let a = product.filter((el)=>el.price < 100).map((el)=>{
   return {price : el.price - (el.price * 0.10)}
})
console.log(a)

//  Find Second Largest Number
// Task: Use reduce to find the second-largest number in an array.
// - Input: `[10, 20, 15]`
// - Output: `15`


function findSecondLargest(arr) {
    const [largest, secondLargest] = arr.reduce(
        ([max, secondMax], num) => {
            if (num > max) {
                return [num, max];
            } else if (num > secondMax && num < max) {
                return [max, num];
            }
            return [max, secondMax];
        },
        [-Infinity, -Infinity]
    );

    return secondLargest;
}
const input = [18, 20, 19];
console.log(findSecondLargest(input));



//  Remove Duplicates
// Task: Use filter to remove duplicates from an array.
// - Input: `[1, 2, 2, 3, 3]`
// - Output: `[1, 2, 3]`
let arr = [1, 2, 2, 3, 3]
let c = []
arr.forEach((el)=>{
    if(!c.includes(el)){
       c.push(el)
    }
})
console.log(c)



//  Filter Nested Objects
// Task: Filter an array of objects where the tags array contains 'featured'.
// - Input:
// const items = [{ tags: ['sale'] }, { tags: ['featured', 'sale'] }];
// - Output: `[{ tags: ['featured', 'sale'] }]`
const items = [{ tags: ['sale'] }, { tags: ['featured', 'sale'] }];
let ans1 = items.filter((el)=>el.tags.includes('featured'))
console.log(ans1);

//  Calculate Factorial with Reduce
// Task: Write a function to calculate the factorial of a number using reduce.
// - Input: `5`
// - Output: `120`
let num = 5;
let arr5 = []
for(let x=1; x<=num; x++){
  arr5.push(x)
}
let ba = arr5.reduce((acc,curr)=>acc * curr,1)


console.log(ba);


//  Find Intersection
// Task: Write a function to find the intersection of two arrays using filter.
// - Input: `[1, 2, 3]` and `[2, 3, 4]`
// - Output: `[2, 3]`
let abc = [1, 2, 3]
let b = [2,3,4]
let ans5 = abc.filter((el)=>{
    return b.includes(el)
})
console.log(ans5);

//  Chunk an Array
// Task: Use reduce to divide an array into chunks of a given size.
// - Input: `[1, 2, 3, 4]` with size 2
// - Output: `[[1, 2], [3, 4]]`
let array = [1, 2, 3, 4, 5, 6];
let ans4 = [];
for(let x = 0; x<array.length; x++ ){
    let a = []
    if(x % 2 == 0){
      a.push(array[x])
      a.push(array[x+1])
      ans4.push(a)
    }  
}
console.log(ans4)


//  Reverse Strings
// Task: Write a function to reverse all strings in an array using map.
// - Input: `['abc', 'def']`
// - Output: `['cba', 'fed']`
const rev = ['abc', 'def'];
let ans3 = rev.map((el)=>{
    let ans = el.split("").reverse().join("");
    return ans
})
console.log(ans3)

//  Filter Palindromes
// Task: Use filter to return strings that are palindromes from an array.
// - Input: `['racecar', 'hello', 'level']`
// - Output: `['racecar', 'level']`
let ab = ['racecar', 'hello', 'level']
let ans = ab.filter((el)=>{
    let ans = el.split("").reverse().join("")
    return ans == el;
})
console.log(ans)
