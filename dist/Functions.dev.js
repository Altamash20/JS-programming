"use strict";

/*Block of code that performs a specific task, can be invoked whenever needed*/
function myFunction() {
  console.log("Apna College");
  console.log("We are learning JS :)");
}

myFunction();
myFunction();
myFunction();
myFunction(); // using function we can avoid redundancy,i.e., repetition in our code

function myFunction2(msg) {
  // variable within definition of function is known as parameter
  console.log(msg);
}

myFunction2("Hey there!"); // variable used in function call is argument

/*create a function which is used to give sum of two numbers*/

function sum(a, b) {
  // this function gives sum of two taken arguments a and b
  console.log(a + b);
}

sum(6, 9);
sum(8766, 980);
/*return is a reserved keyword which not print result, but just return a value as per the definition of 
the function. That value can be string, array, number */

function helloFunction(x, y) {
  s = x + y;
  return s;
}

helloFunction(9, 73); // gives no output  but is returning a value, which we can use anywhere

val = helloFunction(9, 73);
console.log(val);
/*Note that once we right return statement in our function definition block, no further line of code will become
part of function definition*/

/*Arrow function version of a function. Here we basically store the definition of function in a variable.
And when we print the variable it gives its definition. Thus, here the resulting variable is acting 
as a function*/

var arrowMul = function arrowMul(p, q) {
  console.log(p * q);
};
/*Create a function using the "function" keyword that takes a string as an argument and returns the number 
of vowels present in the string. Also create the arrow function to perform same task*/

/*function vowelSearch(word){
    let vowel = ["a", "e", "i", "o", "u"];
    for(let i=0; i++;){
        let letters = word.slice();
        let count = 0;
        if(letters===vowel[i]){
            count+=1;
        }
        console.log(count);
    }
}
vowelSearch(altamash);  Nice attempt*/


function vowelSearch(word) {
  var count = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = word[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _char = _step.value;

      if (_char === "a" || _char === "e" || _char === "i" || _char === "o" || _char === "u") {
        count += 1;
      }
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

  console.log(count);
}

vowelSearch("rainraingoaway"); // arrow function form

var countVowel = function countVowel(word) {
  var count = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = word[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _char2 = _step2.value;

      if (_char2 === "a" || _char2 === "e" || _char2 === "i" || _char2 === "o" || _char2 === "u") {
        count += 1;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  console.log(count);
};

countVowel("rainraingoaway");
/* Methods are also a function but we associate it with some type of object or data type, for 
example, .toUppercase() is a function but we can use it for strings and not with numerical values  
Similarly, forEach Loop in Arrays is also a method*/

/* In JS, functions can also be used as parameters in some other functions. And, such functions which can 
be passed as argument to a function is named as callback function*/

var arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
  // val is associated with .forEach() function on arr variable 
  console.log(val);
});
arr.forEach(function (val) {
  console.log(val);
});
/*Important question for interviews: Higher Order Function/Methods are those which some other 
function as a parameter, or returning a function */

/*Practice ques: For a given array of numbers, print the square of each value using the forEach loop*/

var array = [9, 5, 23, 64, 5];
array.forEach(function sqr(val) {
  // here val is associated with each value of array variable]
  console.log(val * val);
});
/*Some more array methods are discussed below*/
// Map method, it is similar to .forEach() but unlike it here a new array is created

var nums = [63, 44, 81, 976, 54];
nums.map(function (val) {
  // return value of items of original array
  console.log(val);
});
var newArr = nums.map(function (val) {
  // create a new array
  return val * val;
});
console.log(newArr);
/*Filter*/

var ARRAY = [23, 45, 68, 90, 83, 32];
var newARRAY = ARRAY.filter(function (val) {
  return val % 2 === 0;
});
console.log(newARRAY);
/*Reduce: It performs some operations and reduce the array to a single value. It returns that single value*/

var collection = [1, 2, 3, 4, 5];
var Output = collection.reduce(function (prev, curr) {
  return prev + curr;
});
console.log(Output); // use reduce method to return max value of an array

var Collection = [4, 7, 9, 18, 5];
var OUTPUT = Collection.reduce(function (prev, curr) {
  return prev > curr ? prev : curr;
});
console.log(OUTPUT);
/*Practice questions:*/

/*We are given array of marks of students. Filter out the marks of students which are 90+ */

var marks = [99, 96, 87, 77, 92, 90, 83];
var toppersArray = marks.filter(function (val) {
  return val > 90;
});
console.log(toppersArray);