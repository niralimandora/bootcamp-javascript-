// Array of Object Questions
// Filtering Questions
 var  person = [
    {name:'John', age: 25 ,Products:'' },
    {name: 'Alice', age: 15},
    {name: 'Bob', age: 30},
    {name: 'Charlie', age: 18}
];
// 1. Filter Based on Age:
// Given an array of people with their names and ages, write a function to filter out people
// who are 18 years or older.
let ans = person.filter((el)=>{
    return el.age >= 18;
})
console.log(ans);
// 2. Filter Products by Category:
// Given an array of products with their names, categories, and prices, filter out all the
// products that belong to the &#39;Fashion&#39; category.
const products = [
    { name: "Laptop", category: "Electronics", price: 50000 },
    { name: "Shoes", category: "Fashion", price: 3000 },
    { name: "Watch", category: "Fashion", price: 2000 },
    { name: "Headphones", category: "Electronics", price: 2000 }
    ]; 
    let ans1 = products.filter((el)=>{
        return el.category === "Fashion";
    })
    console.log(ans1);
// 3. Filter Students by Marks:
// Given an array of students with their names and marks, filter out students who scored
// more than 50 marks.
const students = [
    { name: "Ravi", marks: 45 },
    { name: "Priya", marks: 85 },
    { name: "Ankit", marks: 30 },
    { name: "Neha", marks: 90 }
    ]; 
    let ans2 = students.filter((el)=>{
        return el.marks > 50;
    })
    console.log(ans2);
// Summing Questions
// 4. Sum of Product Prices:
// Given an array of items with their names and prices, calculate the total price of all items in
// the array.
const items = [
    { name: "Book", price: 150 },
    { name: "Pen", price: 20 },
    { name: "Notebook", price: 50 },
    { name: "Bag", price: 500 }
    ];
    let sum= 0
    items.forEach((el) => {
        sum += el.price;
    });
    console.log(sum);
// 5. Sum of Ages:
// Given an array of people with their names and ages, write a function to calculate the sum
// of ages of all people in the array.
const people = [
    { name: "John", age: 28 },
    { name: "Jane", age: 34 },
    { name: "Smith", age: 50 },
    { name: "Alice", age: 40 }
    ];
    let s = 0;
    people.forEach((el) => {
        s += el.age;
    });
    console.log(s);
// 6. Sum of Salaries by Department:
// Given an array of employees with their names, departments, and salaries, calculate the
// total salary of all employees in the &#39;IT&#39; department.
const employees = [
    { name: "Rahul", department: "IT", salary: 50000 },
    { name: "Sneha", department: "HR", salary: 40000 },
    { name: "Amit", department: "IT", salary: 60000 },
    { name: "Priya", department: "HR", salary: 45000 }
    ]; 
let add = 0;
    employees.forEach((el) => {
        if(el.department === "IT") {
            add += el.salary;
        }
    }); 
    console.log(add);   
// Combination Questions
// 7. Filter and Sum of Expenses:
// Given an array of expenses with their categories and amounts, filter all expenses related to
// &#39;Food&#39; and calculate their total amount.
const expenses = [
    { category: "Food", amount: 200 },
    { category: "Travel", amount: 500 },
    { category: "Entertainment", amount: 300 },
    { category: "Food", amount: 150 }
    ]; 
    let m = 0;
    expenses.forEach((el) => {
        if(el.category === "Food") {
            m += el.amount;
        }
    });
    console.log(m);
// 8. Sum of Prices of Specific Category:
// Given an array of items with their names, categories, and prices, calculate the sum of
// prices of all items in the &#39;Furniture&#39; category.
const item = [
    { name: "TV", category: "Electronics", price: 40000 },
    { name: "Sofa", category: "Furniture", price: 25000 },
    { name: "Fridge", category: "Electronics", price: 30000 },
    { name: "Table", category: "Furniture", price: 15000 }
    ];
    let p = 0;
    item.forEach((el) => {
        if(el.category === "Furniture") {
            p += el.price;
        }
    });
    console.log(p);