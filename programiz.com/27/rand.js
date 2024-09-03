/**
 * JavaScript Program to Guess a Random Number
 * */ 

let enteredNumber = parseInt(prompt("Guess a number from 1 - 10 and enter: "));
let randomNumber = 0;
randomNumber = Math.floor((Math.random() * 10) );
console.log(enteredNumber, randomNumber);
if( enteredNumber == randomNumber ) {
	console.log(`You have guessed a coorect number.`);
	document.write(`You have guessed a coorect number.`);
} else {
	console.log(`You have not guessed a coorect number.`);
	document.write(`You have not guessed a coorect number.`);
}
