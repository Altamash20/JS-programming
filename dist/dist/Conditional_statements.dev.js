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