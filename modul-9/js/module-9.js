const playSound = note =>
{
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
}
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

const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split("");
const callback = event => {
    const y = event.key;
    for (let h = 0; h < keys.length; h++) {
        if (y === keys[h]) {
            if (document.querySelector('input').checked === true) {
                playSound(buttons[h].getAttribute("data-note"));
            }
            inputField.textContent += y;
            buttons[h].className = "keyboard__btn--active";
            setTimeout(() => {
                buttons[h].classList.remove("keyboard__btn--active");
        }, 300);
        }
    }
};
window.addEventListener("keydown", callback);