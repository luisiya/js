const FIRST  = 'qwertyuiop';
const SECOND = 'asdfghjkl';
const THIRD = 'zxcvbnm';
const A  = FIRST.length;
const B = SECOND.length;
const C = THIRD.length;

// console.log(A, B, C);

var firstRow1 = FIRST.charAt(0);
var firstRow2 = FIRST.charAt(A-1)
// console.log(firstRow1, firstRow2);

var secondRow1 = SECOND.charAt(0);
var secondRow2 = SECOND.charAt(B-1)
// console.log(secondRow1, secondRow2);

var thirdRow1 = THIRD.charAt(0);
var thirdRow2 = THIRD.charAt(C-1)
// console.log(thirdRow1, thirdRow2);

var row1 = FIRST.indexOf("b");
var row2 = SECOND.indexOf("b");
var row3 = THIRD.indexOf("b");
// console.log(row1, row2, row3);


console.log(`
	The first const is FIRST = ${FIRST},
	the second const is SECOND = ${SECOND},
	the third const is THIRD = ${THIRD}.

	Lenght of  first one = ${A},
	lenght of  second one = ${B},
	lenght of  third one = ${C}.

	First and last symbols of consts are:
	- for first one are ${firstRow1} and ${firstRow2},
	- for second one are ${secondRow1} and ${secondRow2},
	- for third one are ${thirdRow1} and ${thirdRow2}.	

    Result	of finding symbol [b] is:
    - [b] is located only in the third const and take index ${row3}.	`

	);
