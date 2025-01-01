"use strict";

/*if statement*/
var age = 21;

if (age > 18) {
  // if statement execute a block if a given condition is true
  console.log("you can vote!");
}

var AGE = 15;

if (AGE < 18) {
  console.log("you CANNOT vote");
}

var mode = "light";
var color;

if (mode == "dark") {
  color = "black";
}

if (mode == "light") {
  color = "white";
}

console.log(color);
mode = "dark";
console.log(color); //it again gives output white color

/*if-else statement*/

var MODE = "light";
var COLOR;

if (MODE == "dark") {
  COLOR = "black";
} else {
  // else comes with if and not exists independently
  COLOR = "white";
}

console.log(COLOR);
/*Find whether a number is even or odd*/

var num = 13;

if (num % 2 == 0) {
  console.log(num, "is even");
} else {
  console.log(num, "is odd");
}
/*else-if statement is used to check multiple conditions*/


var setting = "blue";
var background;

if (setting == "dark") {
  background = "black";
} else if (setting == "blue") {
  background = "blue";
} else if (setting == "purple") {
  background = "purple";
} else {
  background = "white";
}

console.log("background is", background);
if (setting !== "black") console.log("background is not", background); //this way of writing is also correct 

/* ternary operator in JS. It is of the form a?b:c */

var Age = 11;
var result = Age >= 18 ? "adult" : "not adult";
console.log(result);
/*MDN Docs to read about much more in JS*/

/*Practice question: Get user to input a number using prompt("Enter a number:"). Check 
if the number is multiple of 5 or not.*/

var action = prompt("Enter a number:");
/* to check its output connect thi JS file to 
index.html file and open inspect in browser*/

if (action % 5 == 0) {
  console.log(action, " is multiple of 5");
} else {
  console.log(action, "is NOT multiple of 5");
}