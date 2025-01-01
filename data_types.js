let cost = 300;
console.log(typeof cost); //print data type of data stored in cost variable 

let fullName = "Joe Biden"
console.log(typeof fullName);

let isFollow = true;
console.log(isFollow);
console.log(typeof isFollow);

const student = {
    fullName: "Rahul Kumar",
    age: 20,
    cgpa: 8.2,
    isPass: true 
};
console.log(student);   // the variable student act as object
console.log(typeof student);
console.log(student["cgpa"]); // this way to access value of an object using its key is correct and also below one
console.log(student.cgpa); // not used quotes while using this method
console.log(student.age);

student["fullName"] = student["fullName"] + " Singh"; // update value of a key within an object
console.log(student["fullName"])

student["age"] = student["age"] + 1; // update age of student
console.log(student["age"])

/*Note that we can't make changes to value of const variable but can do changes with value of keys within 
const objects*/

/*Practice quetsion on declaring const object*/
const profile = {
    username: "shradhakhapra",
    fullName: "Shradha Khapra",
    followers: 569000,
    following: 4,
    isFollowing: true,
    posts: 195,
    business: "entrepreneurship"
};

console.log(profile);
console.log(typeof profile);
console.log(typeof profile["isFollowing"]); // print type of data stored in isFollowing key
