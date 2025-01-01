"use strict";

/*Arithmetic operators*/
var a = 5;
var b = 35;
console.log(a + b); // print final result

console.log("a-b=", a - b);
console.log("a*b=", a * b);
console.log("a/b=", a / b);
console.log("a%b=", a % b);
console.log("a**b=", Math.pow(a, b));
/*Unary Operators*/

var c = 67;
c++;
console.log("c=", c);
/*Pre and post increment decrement*/

console.log("c++ =", c++);
console.log("c=", c);
console.log("++c=", ++c);
console.log("c =", c);
/*Assignment Operators*/

var d = 4;
d += 2;
console.log(d); // other assignment operators can be d-=2, d*=2, d/=2, d%=2, d**=2

/*Comparison Operators*/

var e = 5;
var f = 3;
console.log("5==3", e == f);
console.log("5!=3", e != f);
var g = "3";
console.log("3==3", f == g);
/* it is feature of JS that in such case for comparison, it converts 
  string to number then compare it with number*/

console.log("3===3", f === g);
/*Strict version of == It also compare data type*/

console.log("3!==3", f !== g);
console.log("5>=3", e >= f);
console.log("5>3", e > f);
console.log("5<=3", e <= f);
console.log("5<3", e < f);
/*Logical Operators*/

var h = 2;
var j = 6;
var cond1 = h > j;
var cond2 = j === 6;
console.log("cond1 && cond2", cond1 && cond2);
console.log("cond1 || cond2", cond1 || cond2);
console.log("!cond1", !cond1);
console.log("!cond2", !cond2);