//1. Write a JavaScript function that adds a new element to an array and then removes the last element. 
// Log the modified array.
console.log('ans 1')
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows','dogs');
console.log(animals);
count.animals = animals.pop();
console.log(animals);
//2. Write a function that adds a number at the beginning of an array and removes the first element. 
// Return the modified array
console.log('ans 2')
const animal = ['pigs', 'goats', 'sheep'];

const c = animal.unshift('cows','dogs');
console.log(animal);
c.animal = animal.shift();
console.log(animal);


//3. Use splice to remove the 3rd element from an array of 5 elements. Show the resulting array.
console.log('ans 3');
const months = ['10','20','30','40','50'];
months.splice(2, 1);
console.log(months);


//4. Given an array [1, 2, 3, 4], write a function to create a new array with each element doubled using map.
console.log('ans 4')
const array1 = [1,2,3,4];
const map1 = array1.map((x) => x * x);
console.log(map1);


//5. Write a function that filters out all odd numbers from an array of [1, 2, 3, 4, 5, 6].
console.log('ans 5');
const words =[1, 2, 3, 4, 5, 6];
const result = words.filter((item) => item%2!=0);
console.log(result);
//6. Print all the elements of an array using forEach.
console.log('ans 6');
const array = ['abc', 'bac', 'cba'];
array.forEach((element) => console.log(element));

//7. Find the position of the number 5 in the array [10, 20, 5, 40].
console.log('ans 7')
const position = [10, 20, 5, 40];
function q7(arr){
    console.log(arr.indexOf(20))
}4
q7([10, 20, 5, 40])

//8. Find the index of the first element greater than 10 in the array [4, 10, 15, 20].
console.log('ans 8')
function ab(arr){
    console.log(arr.find((e) => e>10))
}
ab([4, 10, 15, 20])
//9. Write a function to check if the word "apple" exists in an array of fruits ['banana', 'orange', 'apple'].
console.log('ans 9');
function exist(arr){
        if(arr.includes("apple")==true)
            console.log("exsist");
        else{
            console.log("not exist");
        }
    }
    exist(['banana', 'orange', 'banana'])
    
//10. Write a function that checks if all numbers in [2, 4, 6] are even using every, and if at least one number is odd using some.
console.log('ans 10')
function q10(arr){
    if(arr.every((e) => e%2==0)){
        console.log("all are even")
    }
    if(arr.some((e) => e%2!=0)){
        console.log("at least one is odd")
    }
}
q10([2, 4, 6])


