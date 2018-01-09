const en = "qwertyuiopasdfghjklzxcvbnm";
let keyTrainer = {};
keyTrainer.chars = en.split("");
keyTrainer.setCharCount = function () {
    this.charCount = prompt(`Please write the number: `);
    while (this.checkPositiveInteger() !== 0) {
        alert(`Please, write the correct number`);
        this.charCount = prompt(`Please write the correct number: `);
    }
};

keyTrainer.checkPositiveInteger = function () {
    if (this.charCount === null) this.cancel();
    else if (this.charCount !== "" && this.charCount > 0 && this.charCount % 1 === 0) {
        return 0;
    }
};

keyTrainer.task = {};

keyTrainer.run = function () {
    this.setCharCount();
    this.checkPositiveInteger();
    this.createTask();
    this.startTask();
    this.comparison();
};

keyTrainer.comparison = function () {
    let errorsCounter = 0;
    for (let j = 0; j < this.task.createTask.length; j++) {
        if (this.userInput[j] !== this.task.createTask[j]) {
            errorsCounter++;
        }
    }
    if (errorsCounter !== 0) {
        console.log(`Upsss... You have ${errorsCounter} mistakes!`);
    }
    else {
        console.log(`CONGRATULATIONS!! You have no mistakes!`);
    }
};

keyTrainer.startTask = function () {
    let userArray = prompt(`Please, write the same letters from: ${this.task.createTask.join('')}`);
    if (userArray === null) this.cancel();
    this.userInput = userArray;
};

keyTrainer.createTask = function () {
    let randomElement;
    let createTask = [];
    for (let i = 0; i < this.charCount; i++) {
        randomElement = Math.floor(Math.random() * (this.chars.length - 1));
        createTask[i] = this.chars[randomElement];
    }
    this.task.createTask = createTask;
};

keyTrainer.cancel = function () {
    throw new Error("You have decided to cancel!");
};

keyTrainer.run();






