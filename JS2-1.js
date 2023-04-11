//! Content: Basic Data Structures

// Reading: EJS 5-6
// HW:
//* 1. Number Filter
// Given a list as a parameter,write a function that returns a list of numbers 
//that are less than ten

// For example: Say your input parameter to the function is [1,11,14,5,8,9]...
// Your output should [1,5,8,9]

let numList = [3,6,9,13,1,90,10];

let smallNumbers = function (numList) {
    let smallNums=[];
    numList.forEach(lessThanTen);
    function lessThanTen (number) {
        number < 10 ? smallNums.push(number) : 0;
    }
    return smallNums;
}

console.log(smallNumbers(numList));


// Write a function that takes in two lists and returns the two lists
// merged together and sorted

let firstArray = ["Anthony", "Chloe", "Kimberly", "Hunter", "Autumn", "Jose", "Vicki", 20.99];
let secondArray = [31, 6, 20, 12, 14, 58, 53, "Pizza"];

// Sort...sorts all objects in array as if they are strings
const sortedArray = (arr1, arr2) => arr1.concat(arr2).sort();
console.log(sortedArray(firstArray, secondArray));

//* 2. Build a Shopping Cart
// You can use either lists or dictionaries. The program should have the 
// following capabilities:

// 1) Takes in input
// 2) Stores user input into a dictionary or list
// 3) The User can add or delete items
// 4) The User can see current shopping list
// 5) The program Loops until user 'quits'
// 6) Upon quitting the program, print out all items in the user's list

let groceries = [];

function groceryCart() {
    const input = prompt("add [item] | remove [item] | list | exit");
    let parts;
    if (input) {
        parts = input.split(" ");
    } else {
        console.log("Input prompt closed.\n")
        list();
        return;
    }

    function list() {
        console.log("Below is your current shopping list.")
        groceries.forEach(list)
        function list(product) {
            console.log(`${product}\n`)
        };
        console.log(`You have ${groceries.length} items in your cart.`);
    };
  
    const action = parts[0];
    const item = parts[1];
    if (action == "list") {
        list();
    } else if (action == "add") {
        groceries.push(item);
        console.log(`${item} added to cart`)
    } else if (action == "remove") {
        let product = item;
        let newArr = groceries.filter(item => item !== product);
        groceries = newArr;
        console.log(`${item} removed from cart`);
    } else if (action == "exit") {
        console.log("Input prompt closed.\n")
        list();
        return;
    } else {
        console.log("Invalid entry, please try again.")
    }
  
    groceryCart();
  }
  
  groceryCart();