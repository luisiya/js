const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};
const note = ["do", "re", "mi", "fa", "sol", "la", "si"];
const lang = {
    en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./"
};

function addKeyboardLayout(a) {
    let b = a.split("");
    const firstRowEnd = 12;
    const secondRowEnd = 23;
    let arr1 = b.slice(0, firstRowEnd);
    let arr2 = b.slice(firstRowEnd, secondRowEnd);
    let arr3 = b.slice(secondRowEnd,);
    let resArr = [];
    resArr[0] = arr1;
    resArr[1] = arr2;
    resArr[2] = arr3;
    return resArr;
}

const keyBoard = addKeyboardLayout(lang.en);
const newObject = {};
newObject.keyBoard = keyBoard;
keyBoard[3] = " ";

newObject.renderRow = function (makerArray, noteArray, rowid) {
    const html = document.querySelector("#row-tpl").textContent.trim();
    const compiled = _.template(html);
    const result = compiled({
        data: makerArray,
        note: noteArray,
        rowid: rowid
    });
    const container = document.querySelector('#row-container');
    container.innerHTML += result;
};
newObject.createLayout = function () {
    for (let j = 0; j < keyBoard.length; j++) {
        const rowMiddle = Math.ceil(keyBoard[j].length / 2);
        const noteArr = note.slice(0);
        const noteArray = [];
        noteArr.length = rowMiddle;
        for (let i = 0; i < keyBoard[j].length; i++) {
            const noteId = i % rowMiddle;
            if (noteId === 0 && i !== 0) {
                noteArr.reverse();
            }
            noteArray.push(noteArr[noteId]);
        }
        newObject.renderRow(keyBoard[j], noteArray, j);
    }
};
newObject.createLayout();

const buttons = Array.from(document.querySelectorAll("#keyboard>div>button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split("");
const callback = event => {

        const y = event.key;
        for (let h = 0; h < keys.length; h++) {
            if (y === keys[h]) {
                if (soundSwitch.checked === true) {
                    console.log(buttons[h].getAttribute("data-note"));
                    playSound(buttons[h].getAttribute("data-note"));
                }
                if (gameParameters.arrayTask) {
                    inputField.textContent += y;
                    Checking();
                }
                buttons[h].className = "keyboard__btn--active";
                setTimeout(() => {
                    buttons[h].classList.remove("keyboard__btn--active");
                }, 300);
            }
        }
};
window.addEventListener("keydown", callback);


const output = document.querySelector('#js-output');
output.textContent = localStorage.getItem('luisi');

function gameTypeStart(){
    inputLength.style.visibility = "visible";
    inputNumber.focus();
    start.style.visibility = "hidden";
    let lengthText = document.querySelector("#inputNumber").value;
    return parseInt(lengthText);
}
let gameParameters = {};

function gameType() {
    let lengthText = gameTypeStart();
    let arrayTask = makeSoloText(lengthText);
    gameParameters.arrayTask = arrayTask;
    if (lengthText > 0 && lengthText < 30) {
        inputLength.style.visibility = "hidden";
        user.style.visibility = "visible";
        taskText.style.visibility = "visible";
        taskText.innerHTML = `Please, print the same letters: <b> ${arrayTask}</b>`;

        let seconds = 0;
        let seconds_timer_id = setInterval(function () {
            if (seconds >= 0 && inputField.textContent.length !== lengthText) {
                seconds++;
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                document.querySelector(".seconds").textContent = seconds;
            }
             if (inputField.textContent.length >= lengthText) {
                if (arrayTask === inputField.textContent) {
                    clearInterval(seconds_timer_id);

                    let result = Math.round(lengthText / seconds * 100) / 100;
                    highScore.style.visibility = "visible";
                    highScore.innerHTML = `Your result is <b>${result} correct letters per second`;
                    if (localStorage.getItem('luisi') < result || localStorage.getItem('luisi') === null) {
                        localStorage.setItem('luisi', result);
                    }
                }
                else {
                    inputField.textContent = "";
                }
            }
        }, 1000);
        return seconds_timer_id;
        makeSoloText(lengthText);
    }
    else{
        alert(`ATTENTION! You can choose the number from 0 to 30 only!`);
    }
}

function makeSoloText(textLength) {
    let randomKeys = keys.slice(0);
    randomKeys.sort(function () {
        return 0.5 - Math.random();
    });
    let arrayTask = [];
    for (let k = 0; k < textLength; k++) {
        arrayTask.push(randomKeys[k]);
    }
    arrayTask = arrayTask.join("");
    return arrayTask;
}

let errors = 0;
let counter = 0;
function Checking() {
    let lengthText = gameTypeStart();
    let arrayTask = gameParameters.arrayTask;
    inputLength.style.visibility = "hidden";

        if (inputField.textContent[inputField.textContent.length - 1] === arrayTask[inputField.textContent.length - 1]) {
            counter++;
        }
        else {
            start.style.visibility = "visible";
            start.innerHTML = "ERROR!";
            start.style.color = "red";
            start.removeAttribute("onclick");
            inputField.textContent = inputField.textContent.slice(0, -1);
            errors++;
        }

        if (inputField.textContent.length === arrayTask.length && errors != 0){

            start.style.visibility = "visible";
            start.innerHTML = `You've done ${errors} errors `;
            start.style.color = "red";
            start.removeAttribute("onclick");

        }
        else if (counter === arrayTask.length){
            start.style.visibility = "visible";
            start.innerHTML = `Super! No mistakes at all! `;
            start.style.color = "red";
            start.removeAttribute("onclick");
        }
      return errors;
}
