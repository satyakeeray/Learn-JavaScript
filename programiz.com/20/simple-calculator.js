/**
 * JavaScript Program to Make a Simple Calculator
 */

let operator = prompt("Enter operaotr: ");
let firstNumber = Number( prompt("Enter first number: ") );
let secondNumber = Number( prompt("Enter second number: ") );
let result = 0;
switch( operator ) {
	case '+':
		result = firstNumber + secondNumber;
		console.log( `The addition of ${firstNumber} and ${secondNumber} is : ` + result );
		document.write( `The addition of ${firstNumber} and ${secondNumber} is : ` + result );
		break;
	
	case '-':
		result = firstNumber - secondNumber;
		console.log( `The subtracttion of ${firstNumber} and ${secondNumber} is : ` + result );
		document.write( `The subtracttion of ${firstNumber} and ${secondNumber} is : ` + result );
		break;
	
	case '*':
		result = firstNumber * secondNumber;
		console.log( `The multiplecation of ${firstNumber} and ${secondNumber} is : ` + result );
		document.write( `The multiplecation of ${firstNumber} and ${secondNumber} is : ` + result );
		break;
	
	case '/':
		if( secondNumber != 0 ) {
			result = firstNumber / secondNumber;
			console.log( `The division of ${firstNumber} and ${secondNumber} is : ` + result );
			document.write( `The division of ${firstNumber} and ${secondNumber} is : ` + result );
		} else {
			console.log( `Devided by zero error` );
			document.write( `Devided by zero error` );
		}			
		break;
	
	default:
		console.log("Bad Request");
		document.write( "Bad Request" );
}
