import { argv } from 'node:process';

// # Primitives

// - Boolean

const isCorrect = false;
const isCorrectCopy = isCorrect;
const isBigger = 2 > 3;
// console.log(isBigger); // false

// - String

const personName = 'jose';
const wordWithQuote = "jose's bicycle";
const templateString = `${personName}'s bicycle`;

const multiLineString = `line 1
line 2`;
const multiLineStringWithQuotes = '##### \n##### \n#####';
const multiLineStringWithConcatenation =
  '#####' + '\n' + personName + '\n' + '#####'; // old way don't use it

// console.log(wordWithQuote);
// console.log(templateString);
// console.log(multiLineStringWithConcatenation);

// - Number

const myYearOfBirth = 1989;
const myHeight = 1.71;
const myAddition = 123 + 123;
const myAdditionWithFloats = 0.1 + 0.2; // Not what you expect
const notANumberType = typeof NaN; // NaN is a number 😂

// console.log('myYearOfBirth', myYearOfBirth);
// console.log('myHeight', myHeight);

// - Null

const myNull = null;
// console.log(typeof myNull); // is not What you expect (typeof null === "object")

// - Undefined

let myUndefined;

// console.log(myUndefined);

// - Symbol

/**
 * Symbols were added to the lineup of primitive data types in
 * JavaScript in 2015. It was part of ES6 specification and its sole
 * purpose is to act as a unique identifier of object properties, i.e.
 * it can be used as a key in objects.
 *
 * This is not going to be needed for completion of the bootcamp
 *
 * If you still have time. You can find more info here:
 * https://levelup.gitconnected.com/everything-you-need-to-know-about-javascript-symbols-24650a163038
 * */

// - BigInt

const myBigInt = 12312312n;

/**
 *
 * BigInt is a primitive wrapper object used to represent and manipulate
 * primitive bigint values — which are too large to be represented by the
 * number primitive.
 *
 * BigInt values are similar to Number values in some ways, but also differ
 * in a few key matters: A BigInt value cannot be used with methods in the
 * built-in Math object and cannot be mixed with a Number value in operations;
 *
 * This is probably not going to be needed for completion of the bootcamp
 *
 * If you still have time. You can find more info here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

// # Not Primitives
// Non Primitives are compared by Reference ({} === {}  is false)

// - Object

const myObject = {};
const myObject2 = new Object();
const student = {
  name: 'maria',
  age: 37,
  address: {
    street: 'Ottakringer Strasse',
    zipCode: 1170,
  },
};

// console.log(argv);
// console.log(student[argv[2]]); // use the input in the command line to get the property dynamically

student.instruments = ['piano'];
// now maria know instruments

// - Array

const myArray = [12, 'Gil', { age: 24, name: 'Sofia' }, student, [1, 2, 3]];

// - Function
