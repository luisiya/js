function typing(letter) {
    inputField.textContent += letter;
}
const topRow = "qwertyuiop[]";
const middleRow = "asdfghjkl;'";
const buttonRow = "zxcvbnm,./";
const keyBoard = [];
const newObject = {};
keyBoard[0] = topRow;
keyBoard[1] = middleRow;
keyBoard[2] = buttonRow;
newObject.keyBoard = keyBoard;

newObject.createLayout = function () {
    for (let j = 0; j < keyBoard.length; j++) {
        const makerArray = keyBoard[j].split("");
        for (let i = 0; i < makerArray.length; i++) {
            const divMaker = document.createElement("DIV");
            divMaker.style.lineHeight = "43px";
            divMaker.style.fontSize = "3rem";
            divMaker.style.textAlign = "center";
            divMaker.innerHTML = makerArray[i];
            divMaker.setAttribute("onclick", `typing("${makerArray[i]}")`);
            document.writeln(`${divMaker.outerHTML}`);
        }
        document.writeln(`<br>`);
    }
}
newObject.createLayout();
