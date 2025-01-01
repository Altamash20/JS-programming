"use strict";

cost_price = 500;
console.log(cost_price); //print value of a variable

x = null;
console.log(x);
y = undefined;
console.log(y);
/* Rule of variable names:
   1) Variable names are case sensitive, means "a" & "A" are different
   2) Only letters, digits, underscore(_) and $ is allowed and not even a space is allowed in variable name
   3) Only a letter, underscore or $ should be first character
   4) Reserved words cannot be used as variable names */

/* Keywords to be used before variable names in Javascript.
   Three types of such keywords:
   1) var:(old way to declare variables), it can both update and re-declared, which is one of its diadvantages. Now we not use it
   2) let: cannot be re-declared, but can be updated
   3) const: has a constant value, not re-declared or update */

var name = "John Cena";
console.log(name);
var radius = "32";
console.log(radius);
var id = "345";
console.log(id);
var PI = 3.14;
console.log(PI);