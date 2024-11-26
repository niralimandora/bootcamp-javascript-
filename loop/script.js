// Easy for Loop Questions
console.log("------------------------------Ans-1----------------------------------")
console.log("Print numbers from 1 to 20")
for(let a=1;a<=20;a++)
{
    console.log(a);
}
console.log("------------------------------Ans-2----------------------------------")
console.log("Print all odd numbers between 1 and 50.")
for(let a=1;a<=50;a++)
{
    if(a%2!=0)
    {
        console.log(a);
    }
}
console.log("------------------------------Ans-3----------------------------------")
console.log("Print numbers from 10 to 1 in reverse order.")
for(let a=10;a>=1;a--)
{
    console.log(a);
}

console.log("------------------------------Ans-4----------------------------------")
console.log("Print the squares of numbers from 1 to 10.")
for(let a=1;a<=10;a++)
{
    console.log(a*a);
}
//Example: Output: 1, 4, 9, 16, 25, ...

console.log("------------------------------Ans-5----------------------------------")
console.log("Print the first 10 multiples of 3.")
for(let a=1;a<=10;a++)
{
    console.log(a*3);
}
//Example: Output: 3, 6, 9, 12, ...

console.log("------------------------------Ans-6----------------------------------")
console.log("Print the sum of the first 5 natural numbers.")
let sum = 0;
for(let a=1;a<=5;a++)
{
    sum += a;
}
console.log("Sum: " + sum);

console.log("------------------------------Ans-7----------------------------------")
console.log("Print the characters of a string one by one.")

let str = "Nirali Mandora";
for(let i = 0;i < str.length; i++)
{
   console.log(str[i]);
}

console.log("------------------------------Ans-8----------------------------------")
console.log("Print the elements of an array.")

let arr = [1, 2, 3, 4, 5];
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
    

console.log("------------------------------Ans-9----------------------------------")
console.log("Print numbers from 1 to 10, but stop if you reach 5")
let j;
for(j=1; j < 10; j++)
{
    if(j<=5)
        {
            console.log(j);
        }
}

console.log("------------------------------Ans-10----------------------------------")
console.log("Find the sum of all even numbers between 1 and 20.")
let s = 0;
for(let c=0;c<=20;c++)
    {
        if(c%2==0)
        {
            s += c;
        }
    }
console.log("Sum: " + s);

console.log("-----------------------------------------------------------------------------")
console.log("Easy while Loop Questions")
console.log("------------------------------Ans-11----------------------------------")

console.log("Print numbers from 1 to 10 using a while loop.")
let d=1;
while(d<=10)
{
    console.log(d);
    d++;
}

console.log("------------------------------Ans-12----------------------------------")
console.log("Print numbers from 5 to 15 using a while loop.")
let e=5
while(e<=15)
{
    console.log(e);
    e++;
}

console.log("------------------------------Ans-13----------------------------------")
console.log("Print all even numbers between 1 and 10 using a while loop.")
let even=1
while(even<=10)
{
    if(even%2==0)
    {
        console.log(even);
    }
    even++;
}

console.log("------------------------------Ans-14----------------------------------")
console.log("Print the first 5 multiples of 4 using a while loop.")

let f=1;
while(f<=5)
{
    console.log(f*4);
    f++;
}

// console.log("------------------------------Ans-15----------------------------------")
// console.log("Keep printing numbers starting from 1 until the sum of the numbers reaches 50.") 

// let sum1=0;
// while(sum1<50);
// {
//     console.log(sum1);
//     sum1++;
// }
console.log("-----------------------------------------------------------------------------")
console.log("Easy do while Loop Questions")
console.log("------------------------------Ans-16----------------------------------")

console.log("Print numbers from 1 to 5 using a do...while loop.")

let g=1;
do{
    console.log(g);
    g++;
}
while(g<=5)

console.log("------------------------------Ans-17----------------------------------")
console.log("Print numbers from 10 to 1 in reverse order using a do...while loop.")

let h=10;

do{
    console.log(h);
    h--;
}
while(h>=1)

console.log("------------------------------Ans-18----------------------------------")
console.log("Print all odd numbers from 1 to 15 using a do...while loop.")

let k=1;
do{
    if(k%2!=0)
    {
        console.log(k);
    }
    k++;
}
while(k<=15)

console.log("------------------------------Ans-19----------------------------------")
console.log("Keep doubling a number starting from 1 until it exceeds 100").

// Print the digits of a number one by one using a do...while loop.
//                        Example: Input: 123, Output: 1, 2, 3