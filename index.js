1. Default Exports
With Default Exports, we can import modules with any name.

1.1 Exporting a variable while defining
We cannot export boolean, number, string, null, undefined, objects, and arrays while defining.

Example:
//sample.js

module.exports = let value = 5;
//index.js

const num = require("./sample.js");
Output
root@123# node index.js
/index.js:3
module.exports = let value = 5;
                     ^

SyntaxError: Unexpected identifier
    at wrapSafe (internal/modules/cjs/loader.js:1053:16)
    ...

   <+++++++++++++++++++++++++++++++++++++++++++++
   
   1.2 Exporting a variable after defining
We can export boolean, number, string, null, undefined, objects, and arrays after defining.

Example:
//sample.js

let value = 5;
module.exports = value;
//index.js

const value = require("./sample.js");

console.log(value);
Output
root@123# node index.js
5
+++++++++++++++++++++++++++++++++++++++
1.3 Exporting a value or an expression
We can export a value or an expression directly.

Example:
//sample.js

module.exports = 5 * 3;
//index.js

const result = require("./sample.js");

console.log(result);
output:

root@123# node index.js
15

<+++++++++++++++++++++++++++++++++>


1.4 Exporting a function while defining
We can export a function while defining.

Example:
//sample.js

module.exports = function (num1, num2) {
  return num1 + num2;
};
//index.js

const sum = require("./sample.js");

console.log(sum(2, 6));
output
root@123# node index.js
8
<++++++++++++++++++++++++++>


1.5 Exporting a function after defining
We can export a function after defining.

Example:
//sample.js

function sum(num1, num2) {
  return num1 + num2;
}
module.exports = sum;
//index.js

const sum = require("./sample.js");

console.log(sum(2, 6));


Output
root@123# node index.js
8
<+++++++++++++++++++++++++>


1.6 Exporting a class while defining
We can export a class while defining.

Example
//sample.js

module.exports = class StudentDetails {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
};


//index.js

const StudentDetails = require("./sample.js");

const studentDetails = new StudentDetails("Ram", 15);

console.log(studentDetails);

console.log(studentDetails.name);

output
root@123# node index.js
StudentDetails { name: 'Ram', age: 15 }
Ram
<++++++++++++++++++++++++++++++++++++++++++++++++>

1.7 Exporting a class after defining
We can export a class after defining.

Example
//sample.js

class StudentDetails {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
module.exports = StudentDetails;

//index.js

const StudentDetails = require("./sample.js");

const studentDetails = new StudentDetails("Ram", 15);

console.log(studentDetails);

console.log(studentDetails.name);
root@123# node index.js
StudentDetails { name: 'Ram', age: 15 }
Ram
<++++++++++++++++++++++++++++++++>

<=====================================================>

2. Named Exports
2.1 Exporting multiple variables while defining
We cannot export boolean, number, string, null, undefined, objects, and arrays while defining.

Example:
//sample.js

exports.value = let value = 5;
exports.studentName = let studentName = "Rahul";

//index.js

const { value, studentName } = require("./sample");

console.log(value);

console.log(studentName);

root@123# node index.js
exports.value = let value = 5;
                    ^^^^^

SyntaxError: Unexpected identifier
    at wrapSafe (internal/modules/cjs/loader.js:1053:16)
    <+++++++++++++++++++++++++++++>


    2.2 Exporting multiple variables after defining
We can export multiple variables after defining.

Example:
//sample.js

let value = 5;
exports.value = value;
let studentName = "Rahul";
exports.studentName = studentName;

//index.js

const { value, studentName } = require("./sample");

console.log(value);

console.log(studentName);
root@123# node index.js
5
Rahul
<+++++++++++++++++++++++++++>
2.3 Exporting multiple values and expressions
We can export multiple values and expressions.

Example:
//sample.js

let value 
= 2;
exports.sum = 2 + 3;
exports.sub = 3 - value;
//index.js

const { sum, sub } = require("./sample");

console.log(sum);

console.log(sub);

output
root@123# node index.js
5
1

<+++++++++++++++>
2.4 Exporting multiple functions while defining
We can export multiple functions while defining.

Example
//sample.js

exports.sum = function (num1, num2) {
  return num1 + num2;
};

exports.sub = function sub(num1, num2) {
  return num1 - num2;
};

//index.js

const { sum, sub } = require("./sample");

console.log(sum(2, 6));

console.log(sub(8, 3));
output
root@123# node index.js
8
5


<+++++++++++++++++++>


2.5 Exporting multiple functions after defining
We can export multiple functions after defining.

Example:
//sample.js

function sum(num1, num2) {
  return num1 + num2;
}

exports.sum = sum;

function sub(num1, num2) {
  return num1 - num2;
}

exports.sub = sub;
//index.js

const { sum, sub } = require("./sample");

console.log(sum(2, 6));

console.log(sub(8, 3));

root@123# node index.js
8
5

<+++++++++++++++++++++++++>
2.6 Exporting multiple classes while defining
We can export multiple classes while defining.

Example:
//sample.js

exports.studentDetails = class StudentDetails {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
};

exports.carDetails = class CarDetails {
  constructor(name, age) {
    this.name = name;
    this.speed = age;
  }
};


//index.js

const { studentDetails, carDetails } = require("./sample.js");

const newStudentDetails = new studentDetails("Ram", 15);
console.log(newStudentDetails);
console.log(newStudentDetails.name);

const newCarDetails = new carDetails("Alto", "60kmph");
console.log(newCarDetails);
console.log(newCarDetails.name);



root@123# node index.js
StudentDetails { name: 'Ram', age: 15 }
Ram
CarDetails { name: 'Alto', speed: '60kmph' }
Alto

<++++++++++++++++++++++++>
2.7 Exporting multiple classes after defining
We can export multiple classes after defining.

Example:
//sample.js

class StudentDetails {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
exports.studentDetails = StudentDetails;

class CarDetails {
  constructor(name, age) {
    this.name = name;
    this.speed = age;
  }
}

exports.carDetails = CarDetails;

//index.js

const { studentDetails, carDetails } = require("./sample.js");

const newStudentDetails = new studentDetails("Ram", 15);
console.log(newStudentDetails);
console.log(newStudentDetails.name);

const newCarDetails = new carDetails("Alto", "60kmph");
console.log(newCarDetails);
console.log(newCarDetails.name);
root@123# node index.js
StudentDetails { name: 'Ram', age: 15 }
Ram
CarDetails { name: 'Alto', speed: '60kmph' }
Alto
