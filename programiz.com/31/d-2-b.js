/**
 * JavaScript Program to Convert Decimal to Binary
 * */ 

let decimalNumber = parseInt( prompt("Enter the number") );
let temp = decimalNumber;
let binartArray = [];
while( decimalNumber != 0 ) {
    let rem = decimalNumber % 2;
    binartArray.push(rem);
    decimalNumber = parseInt( decimalNumber / 2 );
}
binartArray.reverse();
let binaryNumber = binartArray.join('');
console.log('Decimal : ' + temp + ' || Binary :  ' + binaryNumber);
document.write('Decimal : ' + temp + ' || Binary :  ' + binaryNumber);
