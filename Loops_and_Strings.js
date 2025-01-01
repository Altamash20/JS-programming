/*Loops are used to execute a piece of code again and again*/
/*For loop*/
for(let count = 1; count<=5; count+=1){
    console.log("Apna College");
}

/*Calculate sum of 1 to n*/
let sum = 0;
for(let i=1; i<=15; i++){
    sum+=i;
}
console.log(sum);


for(let j=1; j<8; j++){
    console.log("j=",j);
}

// console.log(j); // j is not identified here, as let variable is defined only for block
/*Avoid using condition of infinite loop, it will crash the website*/


/*while loop. Each task of loop is possible to perform with for loop. for and while loops are just 
different ways of writing loop*/
let a = 3;
while(a<=8){
    console.log("Hey JS!");
    a++;
}

/*do-while loop. There is a difference in do-while loop that unlike while loop, here condition is checked 
in the last. It implies one more thing that task here will execute atleast one time irrespective of condition*/
let b = 1;
do{
    console.log("b=",b);
    b++;
}
while (b<=7);

/*for-of and for-in loop. They help us to iterate over special data types like arrays, strings */
let str="Apna College";
for(x of str){             // for-of loop
    console.log("x=",x);
}


let student = {
    name:"RAhul Kumar",
    age:23,
    cgpa:8.1,
    isPass:true
};

for (let key in student){
    console.log("key=",key, "value=", student[key]); // don't write student["key"] else it search for "key" as a key in student
}


/*Practice ques: Print all numbers from 1 to 100*/

for(let k = 1;k<=100;k++){ 
    console.log("k=",k)
}


for(let k = 1;k<=100;k++){     // print all even numbers from 1 to 100
    if(k%2==0){
        console.log(k)
    }
    else{
        k++;
    }
    console.log("k=",k)
}



