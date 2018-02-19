let firstname = document.getElementById("first_name");
const lastname = document.getElementById("last_name");
const tel = document.getElementById("tel");

let allFields = {};

function validate() {https://luisiya.github.io/js/modul-13/index.html
    result.textContent = "";
    if (firstname.value === null || firstname.value === "" || lastname.value === null || lastname.value === "" || tel.value === null || tel.value === ""){
        alert(`You should fill all three of these fields!`);
    }
    else{
        checkFirstName(firstname.value);
        checkLastName(lastname.value);
        checkTel(tel.value);
            }
   }

function checkTel(inputTel){

    let reg = /^\+?3?8?0{1}[1-9]{1}\d{8}$/;
    let replaceReg = /[()-\s]/g;
    let validateTel = (reg, inputTel) => reg.test(inputTel);
    let clearPhone = inputTel.replace(replaceReg, "");
    let result_1 = document.createElement("li");
    result.appendChild(result_1);
    allFields.tel = validateTel(reg, clearPhone);
    result_1.textContent = `SUCCESS: ${Object.keys(allFields)[2]} - passed validation`;
    result_1.setAttribute("style", "font-weight: bold; color: green");

    if (validateTel(reg, clearPhone) === false){
        allFields.tel = validateTel(reg, clearPhone);
        alert(`The Contact No. must be at least 10 digit long!`);
        result_1.setAttribute("style", "font-weight: bold; color: red");
        result_1.textContent = `ERROR: ${Object.keys(allFields)[2]} - failed validation`;
    }
}


function checkFirstName(inputname){

    let reg = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ']+[a-zA-Zа-яА-ЯёЁ']?$/;
    let replaceReg = /[()-\s]/g;
    let validateName = (reg, inputname) => reg.test(inputname);
    let clearName = inputname.replace(replaceReg, "");
    let result_2 = document.createElement("li");
    result.appendChild(result_2);
    allFields.firstname = validateName(reg, clearName);
    result_2.textContent = `SUCCESS: ${Object.keys(allFields)[0]} - passed validation`;
    result_2.setAttribute("style", "font-weight: bold; color: green");

    if (validateName(reg, clearName) === false){
        allFields.firstname = validateName(reg, clearName);
        alert(`The name  must be without numbers and at least 2 letters long!`);
        result_2.setAttribute("style", "font-weight: bold; color: red");
        result_2.textContent = `ERROR: ${Object.keys(allFields)[0]} - failed validation`;
    }

}

function checkLastName(inputname){

    let reg = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/;
    let replaceReg = /[()-\s]/g;
    let validateName = (reg, inputname) => reg.test(inputname);
    let clearName = inputname.replace(replaceReg, "");
    let result_3 = document.createElement("li");
    result.appendChild(result_3);
    allFields.lastname = validateName(reg, clearName);
    result_3.setAttribute("style", "font-weight: bold; color: green");
    result_3.textContent = `SUCCESS: ${Object.keys(allFields)[1]} - passed validation`;

    if (validateName(reg, clearName) === false){
        allFields.lastname = validateName(reg, clearName);
        alert(`The last name  must be without numbers and at least 2 letters long!`);
        result_3.setAttribute("style", "font-weight: bold; color: red");
        result_3.textContent = `ERROR: ${Object.keys(allFields)[1]} - failed validation`;
    }
}