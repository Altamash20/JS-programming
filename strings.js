/*String is a sequence of characters used to represent text*/
let str = "Javascript";
let string = 'Hello!';
console.log(str);   
console.log(string);  // it is also correct way to store a string

console.log(str.length); // gives length of string
console.log(string.length);

console.log(str[1]); // print character of a particular index in string
console.log(string[0]);

/* Template literals, considered as a special type of string, and is to embed some expressions or sentences */
let specialString = `This is a template literal`;
console.log(specialString);

/*Sometimes code line written using template literal is easier to read and understand. For example
see below one.*/
let item = {
    product:"pen",
    price: 10
};
let output = `The cost of ${item.product} is ${item.price} rupees.`;
console.log(output);

/*Escape characters are also sometimes used to print strings*/
console.log("Hello\nMotto"); //gives a new line
console.log("Hello\tMotto"); //gives space of a tab button
let String = "Hello\nMotto";
console.log(String.length); // a escape character is counted of length 1 in string. it is an important interview question