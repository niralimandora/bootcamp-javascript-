// ### Easy `for` Loop Questions
console.log('--------------------------Ans 1--------------------------------------')
console.log('Print the first 10 even numbers starting from 0.')
 for(let a = 0; a < 10; a++)
 {
     if(a % 2 == 0)
     {
        console.log(a)
     }
 }
 console.log("-------------------------Ans 2---------------------------------------")
console.log('Find the sum of all numbers divisible by 3 between 1 and 30.')
 let sum = 0;
 for(let b = 1; b <= 30; b++)
 {
     if(b % 3 == 0)
     {
        // console.log(sum + b)
        sum=sum+b;
        
     }  
 }
console.log(sum)

console.log('--------------------------Ans 3---------------------------------------')
console.log('3. Print the numbers from 1 to 50, but replace multiples of 5 with "Buzz".')

for(let b = 1; b <= 50; b++)
{
    if(b % 5 == 0)
    {
        console.log("Buzz");
    }
    else
    {
        console.log(b);
    }
}

console.log('------------------------Ans 4---------------------------------------')
console.log('Print the multiplication table of a given number (e.g., 4).')

let num = 4;

for(let b = 1; b <= 10; b++)
{
    console.log("4*"+b +"="+num * b);
}

console.log('------------------------Ans 5---------------------------------------')
console.log('Find the product of all numbers from 1 to 5.')
//    - Example: Output: `1 * 2 * 3 * 4 * 5 = 120`

let product = 1;

for(let b = 1; b <= 5; b++)
{
    product *= b;
}

console.log(product)

console.log('------------------------Ans 5---------------------------------------')

console.log('Print all prime numbers between 1 and 50.')

for(let b = 2; b <= 50; b++)
    {
    let isPrime = true;
    for(let c = 2; c < b; c++)
    {
        if(b % c == 0)
        {
            isPrime = false;
            break;
        }
    }
    if(isPrime)
    {
        console.log(b);
    }
}

console.log('------------------------Ans 7---------------------------------------')
console.log('Print the reverse of a given array.')

let arr = [10, 20, 30];

for(let b = arr.length - 1; b >= 0; b--)
{
    console.log(arr[b]);
}

console.log('------------------------Ans 8---------------------------------------')
console.log('Print the numbers from 1 to 100, but skip the number 50 using `continue`')

for(let b = 1; b <= 100; b++)
    {
    if(b == 50)
    {
        continue;

    }
    console.log(b);
}


console.log('#### More Medium `for` Loop Questions')
console.log('-----------------------------Ans-1------------------------------')
console.log('Write a loop to print the factorial of a number (e.g., 6).')

let c = 6;
let factorial = 1;
for(let b = 1; b <= c; b++)
{
    factorial *= b;
}
console.log(factorial)

console.log('-----------------------------Ans-2------------------------------')
console.log('Print a pattern of stars (`*`) in the shape of a triangle.')

let d = "5";

for(let b = 1; b <= d; b++)
{
    let str=''
    for(let c = 1; c <= b; c++)
    {
        str+= "*"
    }
    console.log(str);
}

console.log('-----------------------------Ans-3------------------------------')
console.log('Create a program that sums all the digits of a number.')
let a = 12345
let b =String(12345)
let s=0;
for(let i = 0; i<b.length; i++){
    // console.log(b[i]);
    s+= +(b[i])
}

console.log(s) 

console.log('-----------------------------Ans-4------------------------------')
console.log('Create a program to check whether a number is a perfect square.')

let e = 16
let f = Math.sqrt(e);
if(f%1===0) {
    console.log(e+" is a perfect square");
} else {
    console.log(e+" is not a perfect square");
}

console.log('-----------------------------Ans-5------------------------------')

console.log('Find the sum of all digits of a number using a `for` loop.')
let v = 123
let w =String(v)
let q=0;
for(let i = 0; i<w.length; i++){
    // console.log(b[i]);
    q+= +(w[i])
}
console.log(q)


console.log('More `while` Loop Questions')
console.log('-------------------------Ans-1--------------------------')
console.log('Print the numbers from 10 to 100 in steps of 10 using a `while` loop.')
let x = 10;
while(x <= 100){
    console.log(x);
    x+=10;
}
console.log('-------------------------Ans-2--------------------------')

// console.log('Print the Fibonacci sequence until a number exceeds 50 using a `while` loop.')

// let y = 0;
// while (y <= 50)
// {
//     console.log(y);
//     y += 1;
// } ;

console.log('-------------------------Ans-3--------------------------')

console.log('Write a loop that keeps subtracting 1 from a number until it reaches 0.')

let z = 50;
while (z >= 0)
{
    console.log(z);
    z--;
};

console.log('-------------------------Ans-4--------------------------')
console.log('Write a `while` loop to print the number of vowels in a string.')
let aa=String("nirali'");
let count =0;
let len = aa.length;
let i=0;
while(i<len)
{  
    if(aa[i]=='a'||aa[i]=='e'||aa[i]=='i'||aa[i]=='o'||aa[i]=='u'||
        aa[i]=='A'||aa[i]=='E'||aa[i]=='I'||aa[i]=='O'||aa[i]=='U')
    {
        count++;
    }
    i++;
}
console.log(count);

console.log('-------------------------Ans-5--------------------------')
console.log('Write a `while` loop that keeps doubling a number until it reaches 500.')

let ba= 1;

while (ba<=500){
    console.log(ba);
    ba+=ba;

}



console.log('More `do...while` Loop Questions')

console.log('-------------------------Ans-1--------------------------')
console.log('Create a loop that prints the numbers from 1 to 10, but stops when it reaches 7 using a `do...while` loop.')

let ca = 1;

do{
    console.log(ca);
    ca++;
}
while(ca!=7);

console.log('-------------------------Ans-2--------------------------')
console.log('Write a `do...while` loop that prints the even numbers between 1 and 20.')

let da = 2;

do{
    console.log(da);
    da+=2;
}
while(da<=20);

console.log('-------------------------Ans-3--------------------------')
console.log('Keep subtracting 2 from a number starting at 50 using a `do...while` loop until the result is less than or equal to 10.')

let ea = 50;

do{
    console.log(ea);
    ea-=2;
}
while(ea>=10);

console.log('-------------------------Ans-4--------------------------')
console.log('Write a `do...while` loop that keeps doubling a number starting from 1 until it exceeds 1000.')

let fa = 1;
do{
    console.log(fa);
    fa*=2;
}
while(fa<=1000);

console.log('-------------------------Ans-5--------------------------')
console.log('Check if a number is a palindrome using a `do...while` loop.')

let ac = "abcdcvba"
let st =0 ;
let end = ac.length-1;
let flag = false ;
while(st<end) {
    if(ac[st] == ac[end]) {
        flag = true ;
    }
    else{
        flag = false ;
    }
    st++;
    end-- ;
}

if(flag) {
    console.log("Palindrome")
}
else{
    console.log(" not Palindrome")
}


//    - Example: Input: `121`, Output: `Palindrome`