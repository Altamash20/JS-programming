"use strict";

/*String methods are built-in functions to manipulate a string*/
var str = "ApnaCollege";
console.log(str.toUpperCase());
/* Point to note here that writing str.toUppercase not change 
   the original string, but gives a new string to be printed. It is due to fact 
   that strings in JS are immutable.*/

console.log(str.toLowerCase());
var string = "  Hello JS!  How's your day?   ";
console.log(string.trim()); //it removes spaces from starting and end of string, keeping spaces within the string as it is

var Str = "123456abcde";
console.log(Str.slice(1, 8)); //index 8 is excluded from slice

console.log(Str.slice(1)); // from index 1 till last

var str1 = "apna";
var str2 = "college";
result = str1.concat(str2); // combine string 1 and string 2

console.log(result);
result2 = str2.concat(str1);
console.log(result2);
result3 = str1 + str2; // same functionality as of concatenation

console.log(result3);
var str4 = "Hummm";
console.log(str4.replace("H", "Y")); // search for a part of a string and replace it by required one

console.log(str4.replace("um", "in"));
var str5 = "Humumum";
console.log(str5.replace("um", "in")); // replace only the first coming um

console.log(str5.replaceAll("um", "in")); // replace every um by in

/*Practice ques: Prompt the user to enter their full name. Generate a username for them based on the input.
Start username with @, followed by their fullname and ending with the fullname length*/

var input = prompt("Enter your full name in lowercase without giving spaces:");
var userName;
userName = "@".concat(input).concat(input.length);
console.log(userName);