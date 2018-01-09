const en = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
const ua = "йцукенгшщзхїфівапролджєячсмитьбю.";
const ru = "йцукенгшщзхъфывапролджэячсмитьбю.";

function addKeyboardLayout(a) {
    let b = a.split("");
    const firstRowEnd = 12;
    const secondRowEnd = 23;
    let arr1 = b.slice(0, firstRowEnd);
    let arr2 = b.slice(firstRowEnd + 1, secondRowEnd);
    let arr3 = b.slice(secondRowEnd + 1,);
    let resArr = [];
    resArr[0] = arr1;
    resArr[1] = arr2;
    resArr[2] = arr3;
    return resArr;
}

let keyboard = {};
keyboard.layouts = {};
keyboard.layouts.en = addKeyboardLayout(en);
keyboard.layouts.ua = addKeyboardLayout(ua);
keyboard.layouts.ru = addKeyboardLayout(ru);
keyboard.langs = Object.keys(keyboard.layouts);
keyboard.currentLang = '';

let userChoice = '';
while (userChoice !== null) {
    userChoice = prompt(`Please write a number: 0 - ${keyboard.langs[0]}, 1 - ${keyboard.langs[1]}, ` +
        `2 - ${keyboard.langs[2]}; `);
    if (userChoice !== '' && userChoice >= 0 && userChoice < keyboard.langs.length) {
        keyboard.currentLang = keyboard.langs[userChoice];
        getRandCharInAlph();
        break;
    }
    else {
        alert(`Please, choose the correct number!`);
    }
}

function getRandCharInAlph() {
    let resultArr = keyboard.layouts[keyboard.currentLang];
    let totalArr = resultArr.join();
    let randomElement = Math.floor(Math.random() * (totalArr.length - 1));
    console.log(`For ${keyboard.langs[userChoice]} language random element is ${totalArr[randomElement]}`);
}