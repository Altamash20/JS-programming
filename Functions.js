/*Block of code that performs a specific task, can be invoked whenever needed*/
function myFunction(){
    console.log("Apna College");
    console.log("We are learning JS :)");
}
myFunction();
myFunction();
myFunction();
myFunction(); // using function we can avoid redundancy,i.e., repetition in our code


function myFunction2(msg){     // variable within definition of function is known as parameter
    console.log(msg);
} 
myFunction2("Hey there!");     // variable used in function call is argument

/*create a function which is used to give sum of two numbers*/
function sum(a,b){           // this function gives sum of two taken arguments a and b
    console.log(a+b);
}
sum(6,9); 
sum(8766, 980);


/*return is a reserved keyword which not print result, but just return a value as per the definition of 
the function. That value can be string, array, number */
function helloFunction(x,y){
    s = x+y;
    return s;
}
helloFunction(9,73);  // gives no output  but is returning a value, which we can use anywhere
val = helloFunction(9,73);
console.log(val);
/*Note that once we right return statement in our function definition block, no further line of code will become
part of function definition*/

/*Arrow function version of a function. Here we basically store the definition of function in a variable.
And when we print the variable it gives its definition. Thus, here the resulting variable is acting 
as a function*/
const arrowMul = (p,q) =>{
    console.log(p*q);
}

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
function vowelSearch(word){
    let count = 0;

    for(const char of word){
        if(char === "a" || 
           char === "e" || 
           char === "i" || 
           char === "o" || 
           char === "u")
           {
            count+=1;
        }
    }

    console.log(count);
}
vowelSearch("rainraingoaway");


// arrow function form
const countVowel = (word) =>{
    let count = 0;

    for(const char of word){
        if(char === "a" || 
           char === "e" || 
           char === "i" || 
           char === "o" || 
           char === "u"){
           count+=1;
        }
    }

    console.log(count);
}
countVowel("rainraingoaway");


/* Methods are also a function but we associate it with some type of object or data type, for 
example, .toUppercase() is a function but we can use it for strings and not with numerical values  
Similarly, forEach Loop in Arrays is also a method*/

/* In JS, functions can also be used as parameters in some other functions. And, such functions which can 
be passed as argument to a function is named as callback function*/ 

let arr = [1, 2, 3, 4, 5];

arr.forEach(function printVal(val){      // val is associated with .forEach() function on arr variable 
    console.log(val);
})

arr.forEach((val) =>{
    console.log(val);
})

/*Important question for interviews: Higher Order Function/Methods are those which some other 
function as a parameter, or returning a function */

/*Practice ques: For a given array of numbers, print the square of each value using the forEach loop*/
let array = [9, 5, 23, 64, 5];

array.forEach(function sqr(val){    // here val is associated with each value of array variable]
    console.log(val*val);
})


/*Some more array methods are discussed below*/
// Map method, it is similar to .forEach() but unlike it here a new array is created
let nums = [63, 44, 81, 976, 54];

nums.map((val) =>{      // return value of items of original array
    console.log(val);
})


let newArr = nums.map((val) =>{      // create a new array
    return val*val;
})
console.log(newArr);


/*Filter*/
let ARRAY = [23, 45, 68, 90, 83, 32];
let newARRAY = ARRAY.filter((val)=>{
    return val%2 === 0;
})
console.log(newARRAY);



/*Reduce: It performs some operations and reduce the array to a single value. It returns that single value*/

let collection = [1, 2, 3, 4, 5];
const Output = collection.reduce((prev, curr)=>{
    return prev + curr;
});
console.log(Output);

// use reduce method to return max value of an array
let Collection = [4, 7, 9, 18, 5];
const OUTPUT = Collection.reduce((prev,curr)=>{
    return prev>curr ? prev : curr;
});
console.log(OUTPUT);

/*Practice questions:*/
/*We are given array of marks of students. Filter out the marks of students which are 90+ */

let marks = [99, 96, 87, 77, 92, 90, 83];
let toppersArray = marks.filter((val)=>{
    return val > 90;
}) 
console.log(toppersArray);





