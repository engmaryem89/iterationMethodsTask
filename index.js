// /You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering
Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
const number = [10, 20, 30, 40, 50];
const result25 = numbers.filter((num) => num >= 25);

console.log(result25);

const result5 = numbers.filter((num) => num % 5 == 0);
console.log(result5);
/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
const resultsquared = numbers.map((num) => num ** 2);
console.log(resultsquared);
const resultmultiple = numbers.map((num) => num * 2);
Node;
console.log(resultmultiple);
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.

Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
const filteredAndSquared = numbers
  .filter((num) => num >= 20)
  .map((num) => num * num);

console.log(filteredAndSquared);

const filteredAndMultiplied = numbers
  .filter((num) => num % 5 === 0)
  .map((num) => num * 3);

console.log(filteredAndMultiplied);
