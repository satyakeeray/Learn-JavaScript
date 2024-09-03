/**
 * JavaScript Program to Check Whether a String is Palindrome or Not
 * */ 

//let enteredStrimng = prompt("Enter the string: ");
const enteredString = "Malayalam";
let strArr = enteredString.toLowerCase().split('');
strArr.reverse();
let reverseString = strArr.join('');
if( enteredString.toLowerCase() == reverseString ) {
	console.log(`The word ${enteredString} is a palindrome word`);
} else {
	console.log(`The word ${enteredString} is not a palindrome word`);
}
