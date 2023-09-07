// import calculateTotalPrice, { author } from './util.js';

// const quantity = 12;
// const productPrice = 2000;

// console.log(calculateTotalPrice.calculate(quantity, productPrice));
// console.log(author);

// fetch request
fetch('https://example.com/')
  // response to text request
  .then((response) => response.text())
  // print data
  .then((data) => console.log('data from fetch with promises', data))
  .catch((error) => console.log(error));

// fetch request
const response = await fetch('https://example.com/');
// response to text request
const data = await response.text();
// print data
console.log('data from fetch with await', data);
