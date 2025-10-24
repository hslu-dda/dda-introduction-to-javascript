/*
Data Design + Art, HSLU Lucerne
Play 1, HS25
See also: https://www.w3schools.com/js/js_functions.asp
*/

/*
BASIC STRUCTURE
-----------------------------------------------------------------*/

// define the function
function myFunction(){
    console.log("printed by my function");
}

// call the function
myFunction();

// functions can hold all kind of code
function calculate(){
    let sum = 10 + 10;
    console.log(sum);
}

calculate();

// ÜBUNG: Create a funtion that prints "hello world"
function helloWorld(){
    console.log("hello world");
}
helloWorld();

/*
PARAMETERS
-----------------------------------------------------------------*/
// functions can receive parameters
function greetings(name){
    console.log("hello", name)
}

greetings("max");

// functions can receive multiple parameters
function bestFriends(name1, name2){
    console.log(name1, "and", name2, "are best friends")
}

bestFriends("Michi", "Max")

// the parameters can be of different data type
// ÜBUNG: Create a function "agePerson" that receives a name (string) and age (integer) and prints it
function agePerson(name, age){
    console.log(name, "is", age, "years old")
}

agePerson("Max", 35)

/*
RETURNS
-----------------------------------------------------------------*/
// A function can return the result that it produces 
// back to were the function was called

function calcSum(num1, num2){
    let sum = num1 + num2;
    return sum;
}

// this way the result can be directly save in a variable
let mySum = calcSum(10, 15);
console.log(mySum)

// ÜBUNG: Create a function "doubleNum" that calculates a number by 2
// return the result and save it into a new variable
function doubleNum(num){
    let result = num * 2;
    return result
}
let double = doubleNum(3476);
console.log(double)

/*
VARIABLE SCOPE
-----------------------------------------------------------------*/
// The scope describes in which places of the code a variable is (un)known

// global scope
let x = 10;

function myFunc(){
    // local scope
    let y = 20;
    
    // x and y is known
    console.log(x, y);
}

// only x is know, y is local
console.log(x, y);

// this also means you can "reuse" variable names inside a function
let array1 = [1, 2, 3, 4];
array1.forEach(element => {
    console.log(element)
});

let array2 = [5, 6, 7, 8]
array2.forEach(element => {
    // no conflict with the name "element"
    console.log(element)    
});

/*
BONUS: ARROW SYNTAX
-----------------------------------------------------------------*/
// Javascript develops over time, with ES6, Functions can be written differently, 
// but essentially they work the same way

// Traditional function syntax
function logName1(name){
    console.log(name);
}
logName1("Darjan");

// Arrow Syntax
const logName2 = (name) => {
    console.log(name)
}
logName2("Nicole");

// ÜBUNG: Create a function "sumNums" that calculates and prints 
// the sum of two numbers in arrow syntax style
const sumNums = (num1, num2) => {
    let sum = num1 + num2;
    console.log(sum)
}
sumNums(100, 200);