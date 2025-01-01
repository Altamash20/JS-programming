"use strict";

/*Loops are used to execute a piece of code again and again*/

/*For loop*/
for (var count = 1; count <= 5; count += 1) {
  console.log("Apna College");
}
/*Calculate sum of 1 to n*/


var sum = 0;

for (var i = 1; i <= 15; i++) {
  sum += i;
}

console.log(sum);

for (var j = 1; j < 8; j++) {
  console.log("j=", j);
} // console.log(j); // j is not identified here, as let variable is defined only for block

/*Avoid using condition of infinite loop, it will crash the website*/

/*while loop. Each task of loop is possible to perform with for loop. for and while loops are just 
different ways of writing loop*/


var a = 3;

while (a <= 8) {
  console.log("Hey JS!");
  a++;
}
/*do-while loop. There is a difference in do-while loop that unlike while loop, here condition is checked 
in the last. It implies one more thing that task here will execute atleast one time irrespective of condition*/


var b = 1;

do {
  console.log("b=", b);
  b++;
} while (b <= 7);
/*for-of and for-in loop. They help us to iterate over special data types like arrays, strings */


var str = "Apna College";
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    x = _step.value;
    // for-of loop
    console.log("x=", x);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var student = {
  name: "RAhul Kumar",
  age: 23,
  cgpa: 8.1,
  isPass: true
};

for (var key in student) {
  console.log("key=", key, "value=", student[key]); // don't write student["key"] else it search for "key" as a key in student
}
/*Practice ques: Print all numbers from 1 to 100*/


for (var k = 1; k <= 100; k++) {
  console.log("k=", k);
}

for (var _k = 1; _k <= 100; _k++) {
  // print all even numbers from 1 to 100
  if (_k % 2 == 0) {
    console.log(_k);
  } else {
    _k++;
  }

  console.log("k=", _k);
}