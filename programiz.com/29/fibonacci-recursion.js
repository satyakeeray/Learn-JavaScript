/**
 * JavaScript Program to Display Fibonacci Sequence Using Recursion
 * */ 


function fibonacci( number ) {
	if( number < 2 ) {
		return number;
	} else {
		return fibonacci(number - 1) + fibonacci(number - 2);
	}
}

// take nth term input from the user
const nTerms = prompt('Enter the number of terms: ');

if(nTerms <=0) {
    console.log('Enter a positive integer.');
}
else {
    for(let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}