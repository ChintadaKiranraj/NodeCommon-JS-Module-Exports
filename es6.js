1. Default Exports
With Default Exports, we can import modules with any name.

1.1 Exporting a variable while defining
We cannot export boolean, number, string, null, undefined, objects, and arrays while defining.

Example:
//sample.mjs

export default let value = 5;
//index.mjs

import value from "./sample.mjs";
console.log(value);

root@123# node index.mjs
(node:31964) ExperimentalWarning: The ESM module loader is experimental.
file:///index.mjs:1
export default let value = 5;
               ^^^
SyntaxError: Unexpected strict mode reserved word


<++++++++++++++++++++>
1.2 Exporting a variable after defining
We can export boolean, number, string, null, undefined, objects, and arrays after defining.

Example:
//sample.mjs

let a = 5;
export default a;
//index.mjs

import a from "./sample.mjs";
console.log(a);
root@123# node index.mjs
(node:32665) ExperimentalWarning: The ESM module loader is experimental.
5



1.3 Exporting a value or an expression
We can export a value or an expression directly.

Example:
//sample.mjs

export default 5 * 3;
//index.mjs

import result from "./sample.mjs";

console.log(result);

root@123# node index.mjs
(node:4071) ExperimentalWarning: The ESM module loader is experimental.
15


<+++++++++++++++>
1.4 Exporting a function while defining
We can export a function while defining.

Example:
//sample.mjs

export default function (num1, num2) {
  return num1 + num2;
}
//index.mjs

import sum from "./sample.mjs";

console.log(sum(2, 6));
root@123# node index.mjs
(node:4278) ExperimentalWarning: The ESM module loader is experimental.
8


<+++++++++++++++>
1.5 Exporting a function after defining
We can export a function after defining.

Example
//sample.mjs

function sum(num1, num2) {
  return num1 + num2;
}
export default sum;
//index.mjs

import sum from "./sample.mjs";

console.log(sum(2, 6));
root@123# node index.mjs
(node:4462) ExperimentalWarning: The ESM module loader is experimental.
8
<++++++++++++++++++++++++++++++>

1.6 Exporting a class while defining
We can export a class while defining.

Example:

//sample.mjs

export default class StudentDetails {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

//index.mjs

import StudentDetails from "./sample.mjs";

const newStudentDetails = new StudentDetails("Ram", 15);
console.log(newStudentDetails);
console.log(newStudentDetails.name);
root@123# node index.mjs
(node:1035) ExperimentalWarning: The ESM module loader is experimental.
StudentDetails {name: "Ram", age: 15}
Ram
<++++++++++++++++++>


1.7 Exporting a class after defining
We can export a class after defining.

Example:
//sample.mjs

class StudentDetails {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
export default StudentDetails;

//index.mjs

import StudentDetails from "./sample.mjs";

const newStudentDetails = new StudentDetails("Ram", 15);
console.log(newStudentDetails);
console.log(newStudentDetails.name);
root@123# node index.mjs
(node:1575) ExperimentalWarning: The ESM module loader is experimental.
StudentDetails {name: "Ram", age: 15}
Ram




<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>></>
2. Named Exports
2.1 Exporting multiple variables while defining
We can export boolean, number, string, null, undefined, objects, and arrays while defining.

Example:
//sample.mjs

export let value = 5;
export let studentName = "Rahul";
//index.mjs

import { value, studentName } from "./sample.mjs";

console.log(value);

console.log(studentName);
root@123# node index.mjs
(node:1770) ExperimentalWarning: The ESM module loader is experimental.
5
Rahul


<++++++++++++>
2.2 Exporting multiple variables after defining
We can export multiple variables after defining in an Object format.

Example:
//sample.mjs

let value = 5;
const studentName = "Rahul";

export { value, studentName };
//index.mjs

import { value, studentName } from "./sample.mjs";

console.log(value);
console.log(studentName);

root@123# node index.mjs
(node:2437) ExperimentalWarning: The ESM module loader is experimental.
5
Rahul
<++++++++++++++++>

2.3 Exporting multiple functions while defining
We can export multiple functions while defining.

Example:

//sample.mjs

export function sum(num1, num2) {
  return num1 + num2;
}

export function sub(num1, num2) {
  return num1 - num2;
}
//index.mjs

import { sum, sub } from "./sample.mjs";

console.log(sum(4, 2));

console.log(sub(4, 2));
root@123# node index.mjs
(node:2954) ExperimentalWarning: The ESM module loader is experimental.
6
2
<+++++++++++++++++>

2.4 Exporting multiple functions after defining
We can export multiple functions after defining.

Example:
//sample.mjs

function sum(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

export { sum, sub };
//index.mjs

import { sum, sub } from "./sample.mjs";

console.log(sum(4, 2));

console.log(sub(4, 2));
root@123# node index.mjs
(node:3276) ExperimentalWarning: The ESM module loader is experimental.
6
2

<++++++++++++++++++>
2.5 Exporting multiple classes while defining
We can export multiple classes while defining.

Example:
//sample.mjs

export class StudentDetails {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export class CarDetails {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
}

//index.mjs

import { StudentDetails, CarDetails } from "./sample.mjs";

const newStudentDetails = new StudentDetails("Ram", 15);
console.log(newStudentDetails);
console.log(newStudentDetails.name);

const newCarDetails = new CarDetails("Alto", "60kmph");
console.log(newCarDetails);
console.log(newCarDetails.name);

root@123# node index.mjs
(node:3517) ExperimentalWarning: The ESM module loader is experimental.
StudentDetails { name: 'Ram', age: 15 }
Ram
CarDetails { name: 'Alto', speed: '60kmph' }
Alto
<+++++++++++++++++++++++>
2.6 Exporting multiple classes after defining
We can export multiple classes after defining.

Example:
//sample.mjs

class StudentDetails {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class CarDetails {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
  }
}

export { StudentDetails, CarDetails };


//index.mjs

import { StudentDetails, CarDetails } from "./sample.mjs";

const newStudentDetails = new StudentDetails("Ram", 15);
console.log(newStudentDetails);
console.log(newStudentDetails.name);

const newCarDetails = new CarDetails("Alto", "60kmph");
console.log(newCarDetails);
console.log(newCarDetails.name);
root@123# node index.mjs
(node:3841) ExperimentalWarning: The ESM module loader is experimental.
StudentDetails {name: "Ram", age: 15}
Ram
CarDetails {name: "Alto", speed: "60kmph"}
Alto
<+++++++++++++++++++>
