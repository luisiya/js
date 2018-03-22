let elementIsClicked = false;
let seconds = 0;
let today = new Date();
let newYear = new Date(2019/01/01);
newYear.setFullYear(2019);

class Timer {
    constructor(startTime, stopTime){
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.Interval = this.stopTime - this.startTime;
         }
    static timeToNY(today, newYear){
        let oneDay = 24*60*60*1000;
        let countDays = Math.round(Math.abs((today.getTime() - newYear.getTime())/(oneDay)));
        console.log(`${countDays} days left until NY-2019`);
    }
    start(){
        this.startTime = seconds;
        stopWatch.startTime = this.startTime;
        let seconds_timer_id = setInterval(function () {
            if (seconds >= 0) {
                seconds++;
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                document.querySelector(".seconds").textContent = seconds;
            }
            if(elementIsClicked === true){
                clearInterval(seconds_timer_id);
                elementIsClicked = false;
               }
        }, 1000);
    };
    stop(){
        this.stopTime = seconds;
        this.Interval = this.stopTime - this.startTime;
        elementIsClicked = true;
        this.getTime();
        }
    getTime(){
        console.log(`The inerval = ${this.Interval} seconds`);
    }
}

let timerFirst = new Timer(10,100);
console.log(timerFirst);

let timerSecond = new Timer(5,55);
console.log(timerSecond);

let stopWatch = new Timer(0,0);

Timer.timeToNY(today, newYear);