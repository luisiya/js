const FIRST  = 'qwertyuiop';
const SECOND = 'asdfghjkl';
const THIRD = 'zxcvbnm';
const A  = FIRST.length;
const B = SECOND.length;
const C = THIRD.length;

var firstRow1 = FIRST.charAt(0);
var firstRow2 = FIRST.charAt(A-1)

var secondRow1 = SECOND.charAt(0);
var secondRow2 = SECOND.charAt(B-1)

var thirdRow1 = THIRD.charAt(0);
var thirdRow2 = THIRD.charAt(C-1)

var row1 = FIRST.indexOf("b");
var row2 = SECOND.indexOf("b");
var row3 = THIRD.indexOf("b");


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
    - [b] is located only in the third const and takes index ${row3}.	`

	);
