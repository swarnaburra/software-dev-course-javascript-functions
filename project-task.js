/*
===========================================
🔁 Function Refactoring Activity
===========================================

🎯 Objective:
Students will identify repetitive or poorly organized code in a given script
and refactor it by creating programmer-defined functions.

This activity reinforces:
- Writing functions with no, single, and multiple parameters
- Using return statements effectively
- Improving code reusability and modularity

---
🧭 Instructions:

1️⃣ Analyze the provided script, which performs a series of repetitive tasks.

2️⃣ Identify sections of code that can be improved using functions.

3️⃣ Write reusable functions with appropriate parameters and return statements.

4️⃣ Refactor the original code to use your new functions.

5️⃣ Test the refactored script to ensure it produces the same output as the original.

---
*/

// ============================================
// ❌ Original Code (Before Refactoring)
// ============================================

// Script 1 - Greeting multiple users

console.log("Welcome, Alice!");
console.log("Welcome, Bob!");
console.log("Welcome, Charlie!");

//Refactoring Script 1 -  Greeting multiple users
////Not using return since code has to display the output instead of giving back the value to use later in the code

function greet(name)
{
console.log("Welcome, " + name + "!");
}
greet("Alice");
greet("Bob");
greet("Charlie");


// Script 2 - Sum calculation

let num1 = 5, num2 = 10;
let sum = num1 + num2;
console.log("The sum of 5 and 10 is " + sum);

// Refactoring - Script 2 - Sum calculation
////Not using return since code has to display the output instead of giving back the value to use later in the code

function sumOfNumbers(num1, num2) //created a function named sumOfNumbers with two placeholders num1 and num2
{
   let sum = num1 + num2; // sum is the new variable in which two added number is stored
   console.log("The sum of " + num1 + " and " + num2 + " is " + sum ); // printing the message
 
}
sumOfNumbers(5,10); //calls the function sumOfNumbers and gives two arguments- the actual inputs which fill in the placeholders


// Script 3 - Product calculation

let product = num1 * num2;
console.log("The product of 5 and 10 is " + product);

//Refactoring - // Script 3 - Product calculation
////Not using return since code has to display the output instead of giving back the value to use later in the code

function multiPlicaiton(num1, num2)
{
let product = num1 * num2;
console.log("The product of " + num1 + " and " + num2 + " is " + product);
}
multiPlicaiton(5,10);




// Script 4 - Print names from a list

let names = ["Alice", "Bob", "Charlie"];
console.log("Names in the list:");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Refactoring - Script 4 - Print names from a list

//Not using return since code has to display the output instead of giving back the value to use later in the code

function listNames(name1, name2, name3)
{
let names = [name1, name2, name3];

for (let i=0; i < names.length; i++) 

{
console.log("Names in the list: " + names[i]);
}

}
listNames("Alice", "Bob", "Charlie");



/*
===========================================
🛠️ Steps for Refactoring
===========================================

🔹 Break Down Tasks into Functions:
   - Identify repetitive patterns (e.g., greetings, calculations, list printing)
   - Define separate functions for each task

🔹 Write Functions with Parameters and Return Values:
   - Parameterize functions for flexibility (e.g., pass in name, numbers, arrays)
   - Use return statements where necessary

🔹 Refactor the Original Code:
   - Replace repeated code with meaningful function calls
   - Keep your code clean, readable, and easy to maintain
*/

// ✅ Your refactored code goes below this line!
