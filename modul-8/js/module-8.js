function typing(letter) {
    inputField.textContent += letter;

}
const note = ["do", "re", "mi", "fa", "sol", "la", "si"];
const topRow = "qwertyuiop[]";
const middleRow = "asdfghjkl;'";
const buttonRow = "zxcvbnm,./ ";
const keyBoard = [];
const newObject = {};
keyBoard[0] = topRow;
keyBoard[1] = middleRow;
keyBoard[2] = buttonRow;
newObject.keyBoard = keyBoard;

newObject.createLayout = function () {
    for (let j = 0; j < keyBoard.length; j++) {
        const makerArray = keyBoard[j].split("");
        const rowMiddle = Math.ceil(keyBoard[j].length / 2);
        const noteArr = note.slice(0);
        noteArr.length = rowMiddle;
        for (let i = 0; i < makerArray.length; i++) {
            const divMaker = document.createElement("BUTTON");
            divMaker.style.lineHeight = "43px";
            divMaker.style.fontSize = "2.4rem";
            divMaker.style.textAlign = "center";
            divMaker.innerHTML = makerArray[i];
            if (divMaker.innerHTML == ' ') {
                document.writeln(`<br>`);
                divMaker.style.width = "500px";
            }
            divMaker.setAttribute("onclick", `typing("${makerArray[i]}")`);
            const noteId = i % rowMiddle;
            if (noteId === 0 && i !== 0){
                noteArr.reverse();
            }
            divMaker.setAttribute("data-note", `${noteArr[noteId]}`);
            document.writeln(`${divMaker.outerHTML}`);
        }
        document.writeln(`<br>`);
    }
};
newObject.createLayout();

const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
};
const buttons = Array.from(document.querySelectorAll("button"));
const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./ ".split("");
const callback = event => {
    const y = event.key;
    for (let h = 0; h < keys.length; h++) {
        if (y === keys[h]) {
            if (document.querySelector('#slideThree').checked === true) {
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