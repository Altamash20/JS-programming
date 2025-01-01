/*Practice ques: Create a number game where you start with any random number. Ask the user to keep 
guessing that game number until the user enters correct value*/
let gameNum = 25;
let userNum = prompt("Guess the game number : "); // Note that prompt() always consider the user input as a string 

while(userNum != gameNum){
    userNum = prompt("You enterd wrong number. Guess again:"); 
}
console.log("Congratulations, you entered the right number");