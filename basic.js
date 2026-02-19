
// SECTION 1 — Variables & Assignment
// 1. Store personal details
let name = "Yuvashri";
let age = 20;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// 2. Swap two numbers
let a = 5;
let b = 10;

console.log("Before Swap: a =", a, "b =", b);

a = a + b;
b = a - b;
a = a - b;

console.log("After Swap: a =", a, "b =", b);

// 3. Copy example
let x = 10;
let y = x;
y = 20;
console.log("Value of x:", x); // 10

// 4. Using const
const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;
console.log("Area of circle:", area);


// SECTION 2 — Operators


let num1 = 15;
let num2 = 4;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

// Type conversion examples
console.log(5 + "5");   // 55
console.log(5 - "2");   // 3
console.log(true + 1);  // 2

// Compare with 100
let number = 80;

if (number > 100) {
  console.log("Greater than 100");
} else if (number === 100) {
  console.log("Equal to 100");
} else {
  console.log("Less than 100");
} 
// Equality
console.log(5 == "5");   // true
console.log(5 === "5");  // false

// Logical operator
let personAge = 25;

if (personAge >= 18 && personAge <= 60) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}



// SECTION 3 — Control Statements

// Even or Odd
let n = 8;

if (n % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// FizzBuzz
let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
  console.log("FizzBuzz");
} else if (num % 3 === 0) {
  console.log("Fizz");
} else if (num % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(num);
}

// Switch example
let day = 2;

switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid day");
}

// For loop (1 to 20 even numbers)
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// While loop (sum 1 to 5)
let N = 5;
let sum = 0;
let i = 1;

while (i <= N) {
  sum = sum + i;
  i++;
}
console.log("Sum from 1 to", N, "=", sum);

// Break and Continue
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  if (i === 8) break;
  console.log(i);
}

// SECTION 4 — Function

// Add two numbers
function add(x, y) {
  return x + y;
}
console.log("Addition:", add(3, 7));

// Arrow function
const addArrow = (x, y) => x + y;
console.log("Arrow Addition:", addArrow(4, 6));

// Prime check
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log("Is 7 prime?", isPrime(7));

// Reverse string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("Reversed:", reverseString("Hello"));

// Largest number
function findLargest(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log("Largest:", findLargest([3, 9, 2, 15, 6]));


// SECTION 5 — Integrated Challenge

// Function to calculate grade
function calculateGrade(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 75) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else {
    return "Fail";
  }
}

// Fixed student marks
let studentName = "John";
let studentMarks = 85;

// Get grade
let grade = calculateGrade(studentMarks);

// Print Final Output
console.log("----- Final Result -----");
console.log("Student Name:", studentName);
console.log("Marks:", studentMarks);
console.log("Grade:", grade);
