const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
var firstArray = alphabet.split("");
var endArr1 = firstArray.indexOf("]");
var endArr2 = firstArray.indexOf("'");
var arr1 = firstArray.slice(0, endArr1);
var arr2 = firstArray.slice(endArr1 + 1, endArr2);
var arr3 = firstArray.slice(endArr2 + 1, );

var keyboard = [[],[],[]];
keyboard[0] = arr1;
keyboard[1] = arr2;
keyboard[2] = arr3;

console.log(`${keyboard[1][5]}${keyboard[0][2]}${keyboard[1][8]}${keyboard[1][8]}${keyboard[0][8]}
${keyboard[1][6]}${keyboard[1][0]}${keyboard[2][3]}${keyboard[1][0]} ${keyboard[1][1]}${keyboard[2][2]}${keyboard[0][3]}${keyboard[0][7]}${keyboard[0][9]}${keyboard[0][4]}
${keyboard[0][4]}${keyboard[0][3]}${keyboard[1][0]}${keyboard[0][7]}${keyboard[2][5]}${keyboard[0][2]}${keyboard[0][3]} `);