var alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
alphabet = alphabet.split("");

function addKeyboardLayout(alphabet){
    var splitPlace1 = alphabet.indexOf("]");
    var splitPlace2 = alphabet.indexOf("'");
    var arr1 = alphabet.slice(0, splitPlace1);
    var arr2 = alphabet.slice(splitPlace1+1, splitPlace2);
    var arr3 = alphabet.slice(splitPlace2+1, );
    var resArr = [[],[],[]];
    resArr[0] = arr1;
    resArr[1] = arr2;
    resArr[2] = arr3;

    return resArr;
}
console.log(addKeyboardLayout(alphabet));


function getRandCharInRow(row) {
    var totalArr = addKeyboardLayout(alphabet);
    var randomElement = Math.floor(Math.random() * (totalArr[row - 1].length - 1));
    console.log(`For row ${row} random element is ${totalArr[row - 1][randomElement]}`);

}
console.log(getRandCharInRow(1));


function getRandCharInAlph() {
    var resultArr = addKeyboardLayout(alphabet);
    var totalArr = resultArr[0].concat(resultArr[1], resultArr[2]);
    var randomElement = Math.floor(Math.random() * (totalArr.length - 1));
    console.log(`For alphabet random element is ${totalArr[randomElement]}`);

}
console.log(getRandCharInAlph());


