let container = document.createElement("div");
container.setAttribute("id", "fetchContent");
container.style.fontSize = "30px";
container.style.margin = "0 0 0 20px";
document.body.appendChild(container);
const getUser = (users) => {
    container.innerHTML = "";
    users.map((users) => {

            container.innerHTML += `<div class = "${users.id}">
  ID:<b>${users.id}</b><br>
  Name:<b>${users.name}</b><br>
  Score:<b>${users.score}</b><br><br>
</div>`;
        }
    );
}

function clearData() {
    fetchContent.innerHTML = "";
    getBtn.textContent = "getUsers";
    getBtn.setAttribute("onclick", "getUsers()");
}

function getUsers() {
    fetch("http://fecore.net.ua/rest/")
        .then(response => {

            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(data => {
            getUser(data);
            getBtn.textContent = "CLEAR";
            getBtn.setAttribute("onclick", "clearData()");
        })
}


let userData = {};

function addUser() {
    setBtn.textContent = "Post";
    setBtn.setAttribute("onclick", "validateAddUserFields(userData)");
    updateBtn.style.visibility = "hidden";
    getBtn.style.visibility = "hidden";
    removeBtn.style.visibility = "hidden";
    inputLine.style.visibility = "visible";
    inputLine2.style.visibility = "visible";
    document.querySelector("#nameInput").focus();
}

function validateAddUserFields(userData) {
    if (nameInput.value != "" && scoreInput.value != "") {
        userData.name = nameInput.value;
        document.querySelector("#scoreInput").focus();
        inputLine2.style.visibility = "visible";
        userData.score = scoreInput.value;
        inputLine.style.visibility = "hidden";
        inputLine2.style.visibility = "hidden";
        postNewNameScore(userData);
    }
    else if (nameInput.value === "") {
        alert(`Please, write the NAME`);
    }
    else {
        alert(`Please, write the SCORE`)
    }
}

const postNewNameScore = (userData) => {
    setBtn.textContent = "Add user";
    updateBtn.style.visibility = "visible";
    getBtn.style.visibility = "visible";
    removeBtn.style.visibility = "visible";
    setBtn.setAttribute("onclick", "addUser()");
    fetch("http://fecore.net.ua/rest/",
        {
            method: "POST",
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })

        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
    nameInput.value = "";
    scoreInput.value = "";
};



function sendUpdate() {
    setBtn.style.visibility = "visible";
    getBtn.style.visibility = "visible";
    removeBtn.style.visibility = "visible";
    updateBtn.textContent = "upDate";
    updateBtn.setAttribute("onclick", "updateUser()");
    fetch("http://fecore.net.ua/rest/", {
        method: "PUT",
        body: JSON.stringify({
            id: userUpdate.id,
            name: userUpdate.name,
            score: userUpdate.score
        })
    })
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })

        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
    nameInput.value = "";
    scoreInput.value = "";
}

let userUpdate = {};

function setNewUser() {
    if (nameInput.value != "") {
        userUpdate.name = nameInput.value;
        document.querySelector("#scoreInput").focus();

        if (scoreInput.value != "") {
            userUpdate.score = scoreInput.value;
            sendUpdate();
            inputLine.style.visibility = "hidden";
            inputLine2.style.visibility = "hidden";
            titleInput.style.visibility = "hidden";
            idSelect.style.visibility = "hidden";
        }
        else {
            alert(`Plese, write the SCORE`);
        }
    }
    else {
        alert(`Please, write the NAME`)
    }
}

container2 = document.createElement("select");
container2.setAttribute("id", "idSelect");
container2.style.visibility = "hidden";
document.body.appendChild(container2);

function getUserId(users) {
    container2.style.visibility = "visible";
    container2.innerHTML = "";
    users.map((users) => {
            container2.innerHTML += `<option value = "${users.id}">
                <b>${users.id}</b><br>
 
               </option>`;
        }
    );
    let userId = document.querySelector("select");
    userId = userId.options[userId.selectedIndex].value;
    userUpdate.id = userId;
    updateBtn.innerHTML = "Next";

    inputLine.style.visibility = "visible";
    document.querySelector("#nameInput").focus();
    inputLine2.style.visibility = "visible";

    updateBtn.setAttribute("onclick", "setNewUser()");
}

function updateUser() {
    getBtn.style.visibility = "hidden";
    setBtn.style.visibility = "hidden";
    removeBtn.style.visibility = "hidden";
    fetch("http://fecore.net.ua/rest/")
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(data => {
            getUserId(data);
            titleInput.style.visibility = "visible";
            titleInput.innerHTML = "Choose ID for update";
        })
}



let userId;

function deleteUserFromData(userId) {
    container2.style.visibility = "hidden";
    titleInput.style.visibility = "hidden";
    userId = document.querySelector("select");
    userId = userId.options[userId.selectedIndex].value;
    removeBtn.setAttribute("onclick", "removeUser()");
    removeBtn.innerHTML = "Delete";
    getBtn.style.visibility = "visible";
    setBtn.style.visibility = "visible";
    updateBtn.style.visibility = "visible";
    return fetch("http://fecore.net.ua/rest/" + userId, {
        method: 'delete'
    })
        .then(response => response.json());
}


function getListId(users) {
    container2.style.visibility = "visible";
    container2.innerHTML = "";
    users.map((users) => {
            container2.innerHTML += `<option value = "${users.id}">
                <b>${users.id}</b><br>
 
               </option>`;
        }
    );
    removeBtn.innerHTML = "Remove";
    removeBtn.setAttribute("onclick", "deleteUserFromData(userId)");
}

function removeUser() {
    getBtn.style.visibility = "hidden";
    setBtn.style.visibility = "hidden";
    updateBtn.style.visibility = "hidden";
    fetch("http://fecore.net.ua/rest/")
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(data => {

            getListId(data);
            titleInput.style.visibility = "visible";
            titleInput.innerHTML = "Choose ID for remove";
        })
}