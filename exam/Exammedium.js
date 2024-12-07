//1. Combining `map` and `filter`:
// Write a function that takes an array of numbers and returns a new array
// of squares of even numbers using `filter` and `map`.
// Input:
// const fun = [1, 2, 3, 4, 5, 6];
// Output:
function q1(arr){
    let arr2 = (arr.filter((e) => e%2==0)).map((e) => e*e)
    console.log(arr2)
}
q1([1, 2, 3, 4, 5, 6])

// 2. Using `forEach` to Count Occurrences:
// Write a function that counts how many times each element appears in an
// array using `forEach`.
// Input:
// const items = [&#39;apple&#39;, &#39;banana&#39;, &#39;apple&#39;, &#39;orange&#39;, &#39;banana&#39;, &#39;apple&#39;];
// Output:
// {
// apple: 3,
// banana: 2,
// orange: 1
// }
// 
function q2(arr){
        let arr2 = []
        arr.forEach((e) => {
            let count=0;
            if(arr2.includes(e)){
    
            }else{
                arr2.push(e)
                for(let i=0 ; i<arr.length ; i++){
                    if(arr[i]==e)
                        count ++;
                }
                console.log(e +" is "+ count +" times")
            }
        })
    }
    q2(['apple', 'banana', 'orange', 'apple', 'banana', 'apple'])
    

// 3. Chain `map`, `filter`, and `forEach`:
// Write a function that filters out numbers less than `5` from an array,
// doubles the remaining numbers, and logs each doubled value using
// `forEach`.
// Input:
// const numbers = [2, 3, 5, 7, 8];
// Output:
// 10
// 14
//16
function q3(arr){
    ((arr.filter((e) => e>=5)).map((e) => e*2)).forEach((e) => console.log(e));
}
q3([2, 3, 5, 7, 8])

// 4. Using `map` to Modify Objects:
// Write a function that adds a new property `totalPrice` to an array of
// objects representing items in a shopping cart. Use `map` to calculate
// `totalPrice` as `price * quantity`.
// Input:
// const cart = [
// { item: &#39;apple&#39;, price: 2, quantity: 3 },
// { item: &#39;banana&#39;, price: 1, quantity: 5 },
// { item: &#39;orange&#39;, price: 3, quantity: 2 }
// ];
// Output:
// [
// { item: &#39;apple&#39;, price: 2, quantity: 3, totalPrice: 6 },
// { item: &#39;banana&#39;, price: 1, quantity: 5, totalPrice: 5 },
// { item: &#39;orange&#39;, price: 3, quantity: 2, totalPrice: 6 }
// ]

// 5. Using `filter` for Complex Conditions:
// Write a function that filters out objects from an array where the
// `quantity` is less than `3` or the `price` is greater than `5`.
// Input:
// const items = [
// { name: &#39;apple&#39;, price: 4, quantity: 5 },
// { name: &#39;banana&#39;, price: 6, quantity: 2 },
// { name: &#39;orange&#39;, price: 5, quantity: 4 }
// ];
// Output:
// [
// { name: &#39;apple&#39;, price: 4, quantity: 5 },
// { name: &#39;orange&#39;, price: 5, quantity: 4 }