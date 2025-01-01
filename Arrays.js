/*Arrays are collection of items. We use array to store various values of same type*/
let animes = ["pokemon", "hulk", "captainamerica", "spiderman"];
console.log(animes);
console.log(animes.length);
/*Arrays is not a different data type. it can be understand as an object with index:value pair, 
instead of key:value */
console.log(animes[2]);
console.log(animes[3]);
console.log(animes[0]);
animes[0] = "Ben-10";
console.log(animes[0]);
console.log(animes);  // unlike string, arrays are mutable


/*Looping over an array*/
for(let idx=0; idx<animes.length; idx++){
    console.log(animes[idx]);
}

for(let hero of animes){       // also used to print items of animes array
    console.log(hero);
}

/*Practice ques. Given an array with marks of students as [85, 97, 44, 37, 76, 60]. Find the average marks of the entire 
class.*/
let marks = [85, 97, 44, 37, 76, 60];
let students = marks.length;
let sum = 0;
for(let index = 0; index < marks.length; index++){
    sum+=marks[index];
}
console.log(`The average marks of the class is`, sum/students);

/*Practice ques: For a given array with prices of 5 items-> [250, 645, 300, 900, 50]. All items have an
offer of 10% OFF on them. Change the array to store final price sfter applying offer.*/
let pri = [250, 645, 300, 900, 50];
for(let Index = 0; Index<pri.length; Index++){
    pri[Index] = pri[Index] - 0.1*pri[Index];
}
console.log(pri);


/*Array Methods*/
let veggies = ["potato", "cauliflower", "carrot", "mushroom"]; 
veggies.push("brinjal", "tomato", "ladiesfinger");    // add new items in the end
console.log(veggies);
console.log(veggies.pop());  // delete an item from end and return that deleted item

console.log(veggies.toString());  // return array items as a string

let marvelHeros = ["Spiderman", "Superman", "Thor", "Batman"];
let Potterheros = ["Dumbledore", "Minerva", "Snape", "Harry", "Ron"];
let foodItems = ["Sphagetti", "Hakkanoodles", "Hotdog", "ChilliPotato"];
newArray = marvelHeros.concat(Potterheros).concat(foodItems);   // combine multiple arrays
console.log(newArray);

let name = Potterheros.shift();  // delete beginning item of given array and also return the deleted item
console.log("deleted", name );

console.log(foodItems.slice(0,3)); // return required slice of given array

let arr = [1, 2, 3, 405, 5, 623, 127, 8];
arr.splice(3,3,108, 245, 665, 21);  // take an index, no. of items to be deleted from that index, item(s) to be added
console.log(arr);

// add element:  arr.splice(2,0,10);
// delete element:  arr.splice(2,1);
// replace an element:  arr.splice(2,1,34);

/*Practice ques: Create an array to store companies-> "Bloomberg", "Microsoft", "Uber", "Google", 
                 "IBM", "Netflix".
                 a) Remove the first company from the array
                 b) Remove Uber and add Ola in its place
                 c)Add Amazon at the end. */
let comp = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
let comp1 = comp.shift();
console.log(comp); 
let comp2 = comp.splice(1,1,"Ola");
console.log(comp);    
let comp3 = comp.push("Amazon");
console.log(comp);          
