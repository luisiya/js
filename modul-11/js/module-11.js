let container = document.createElement("div");
container.setAttribute("id", "fetchContent");
document.body.appendChild(container);
const getUser = (users) => {
    container.innerHTML = "";
    users.map((users) => {

            container.innerHTML += `<div class = "${users.id}">
  ID:<b>${users.id}</b><br>
  Name:<b>${users.name}</b><br>
  Score:<b>${users.score}</b><br>
</div>`;


        }
    );

}

function clearData() {
    fetchContent.innerHTML = "";
    jsbtn.textContent = "getUsers";
    jsbtn.setAttribute("onclick", "getUsers()");

}

function getUsers() {
    fetch("http://fecore.net.ua/rest/")

        .then(response => {

            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(data => {

            console.log(data);
            getUser(data);
            jsbtn.textContent = "CLEAR";
            jsbtn.setAttribute("onclick", "clearData()");

        })
}


let userDate = {};

function setUser() {

    jsbtn4.style.visibility = "hidden";
    jsbtn.style.visibility = "hidden";
    jsbtn3.style.visibility = "hidden";
    inputLine.style.visibility = "visible";
    document.querySelector("#nameInput").focus();
    jsbtn2.textContent = "Next";

    if (nameInput.value != "") {
        userDate.name = nameInput.value;
        inputLine2.style.visibility = "visible";
        document.querySelector("#scoreInput").focus();
        jsbtn2.textContent = "POST";

        if (scoreInput.value != "") {
            userDate.score = scoreInput.value;
            console.log(userDate);
            jsbtn2.setAttribute("onclick", addUser(userDate));
            jsbtn4.style.visibility = "visible";
            jsbtn.style.visibility = "visible";
            jsbtn3.style.visibility = "visible";
            jsbtn2.textContent = "addUsers";

        }
        else {
            alert(`Plese, write the SCORE`);
        }
    }
    else {
        alert(`Please, write the NAME`)
    }
}

const addUser = (userDate) => {
    fetch("http://fecore.net.ua/rest/",
        {
            method: "POST",
            body: JSON.stringify(userDate)
        })
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                // Examine the text in the response
                response.json().then(function (data) {
                    console.log(data);
                    inputLine.style.visibility = "hidden";
                    inputLine2.style.visibility = "hidden";
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}


function removeUser(userId) {
    return fetch("http://fecore.net.ua/rest/" + userId, {
        method: 'delete'
    })
        .then(response => response.json());
}

function update(userId) {
    fetch("http://fecore.net.ua/rest/", {
        method: "PUT",
        body: JSON.stringify({
            id: userId,
            name: "Java",
            score: "10004"
        })
    })
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }
                // Examine the text in the response
                response.json().then(function (data) {
                    console.log(data);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
}

function chooseId() {
        let userId = document.querySelector("select");
        userId = userId.options[userId.selectedIndex].value;
        update(userId);
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
    jsbtn4.innerHTML = "next";
    jsbtn4.setAttribute("onclick", "chooseId()");
}

function updateUser() {
    fetch("http://fecore.net.ua/rest/")
        .then(response => {
            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(data => {
//            console.log(data);
            getUserId(data);
            result.style.visibility = "visible";
            result.innerHTML = "Choose ID for update";
        })
}










