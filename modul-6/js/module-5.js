// const PULL_UP_TIME = 100;
// const SIT_DOWN_TIME = 75;
// const PUSH_UP_TIME = 50;
// let pullUpTime;
// let pushUpTime;
// let sitDownTime;
//
// const Sportsman = function(name) {
//     this.name = name;
//     this.pullUp = (count) => {
//         return new Promise((resolve, reject) => {
//             setTimeout( () => {
//             resolve();
//             }, pullUpTime = count * PULL_UP_TIME);
//         });
//     };
//     this.pushUp = (count) => {
//         return new Promise((resolve, reject) => {
//             setTimeout( () => {
//             resolve();
//             }, pushUpTime = count * PUSH_UP_TIME);
//         });
//     };
//     this.sitDown = (count) => {
//         return new Promise((resolve, reject) => {
//             setTimeout( () => {
//             resolve();
//             }, sitDownTime = count * SIT_DOWN_TIME);
//         });
//     };
// }   ;
//
// let s1 = new Sportsman ("Vlad");
// let s2 = new Sportsman ("Sergey");
// let s3 = new Sportsman ("Oleg");
//
// s1.pullUp(10)
// .then(() => {
//     console.log(`Я подтянулся`);
//     console.log(pullUpTime);
//     return s1.pullUp(10);
// })
// .then(() => {
//     console.log("Я отжался");
//     return s1.pushUp(10);
// })
// .then(() => {
//     console.log("Я поприседал");
//     return s1.sitDown(50);
// })
//
//
// Promise.all([s1.pullUp(12), s2.pullUp(11), s3.pullUp(40)])
// .then(() => {
//     console.log("Все отжались");
//     return Promise.all([s1.pushUp(2), s2.pushUp(35), s3.pushUp(14)])
// .then(() => {
//     console.log("Все подтягивания сделаны");
//     return Promise.all([s1.sitDown(22), s2.sitDown(10), s3.sitDown(40)])
// .then(() => {
//     console.log("Все приседания сделаны");
//     return;
//       })
//    })
//    })

//
// const btn = document.querySelector("#js-btn");
// const output = document.querySelector("#js-output");
//
// const onClick = () => {
//     // по клику сделаем fetch к сервису хранения простых JSON конструкций.
//     // По указаному URL лежит JSON с данными о пользователе
//     fetch("https://api.myjson.com/bins/k9i31")
//     // fetch вернет промис, у которого есть метод then
//         .then(response => {
//             // в первом then всегда проверяется состояния ответа,
//             // если поле ok обьекта response правдиво (truthy) то возвращаем response.json() - сами данные,
//             // которые можно будет использовать в следующем then
//             if (response.ok) return response.json();
//
//             // если if не выполнился то "кидаем" ошибку
//             throw new Error("Error fetching data");
//         })
//         .then(data => {
//             // во втором then доступны данные которые мы вернули из первого then, результат responce.json()
//             console.log("data inside then: ", data); // {name: "Mango", age: 2, mood: "happy"}
//
//             // используем JSON.stringify для преобразования обьекта в строку,
//             // чтобы повесить результат как текстовый контент в абзац
//             output.textContent = JSON.stringify(data);
//         })
//         .catch(error => {
//             // catch обрабатывает возможную ошибку запроса
//             console.error("Error: ", error);
//         });
// };
//
// btn.addEventListener("click", onClick);

let container = document.createElement("div");
document.body.appendChild(container);
const renderUser = (users)=>{
    container.innerHTML = "";
    users.map((users)=>{

        container.innerHTML += `<div>
  Name:<b>${users.name}</b><br>
  Email:<b>${users.email}</b><br>
  Phone:<b>${users.phone}</b><br>
</div>`;
        }
    );
}

fetch("https://jsonplaceholder.typicode.com/users")

    .then(response => {

        if (response.ok) return response.json();
        throw new Error("Error fetching data");
    })
    .then(data => {

        console.log(data);
        renderUser(data);
    })


const btn = document.querySelector("#js-btn");
let postArray = {};
const onClick = () => {

    fetch("https://jsonplaceholder.typicode.com/posts",
        {
            method: "POST",

        })
        .then(response => {

            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(data => {
            alert(`Done it ${data.id}`);
            console.log(data);
            postArray.post = data;

        })

}


const btn2 = document.querySelector("#js-btn2");
const onClick2 = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1",
        {
            method: "DELETE",

        })
        .then(response => {

            if (response.ok) return response.json();
            throw new Error("Error fetching data");
        })
        .then(data => {
            alert(`Delete`);
            console.log(data);

        })

}


















