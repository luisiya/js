let elementIsClicked = false;
let seconds = 0;
let today = new Date();
let newYear = new Date(2019/01/01);
newYear.setFullYear(2019);

class Timer {
    constructor(startTime, stopTime){
        this.startTime = startTime;
        this.stopTime = stopTime;
        this.timeInterval = this.stopTime - this.startTime;
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
                this.stopTime = seconds;
                stopWatch.stopTime = this.stopTime;
                stopWatch.timeInterval = stopWatch.stopTime - stopWatch.startTime;
                elementIsClicked = false;
               }
        }, 1000);
    };
    stop(){

          elementIsClicked = true;
          this.getTime();
        }
    getTime(){
        console.log(`The inerval = ${stopWatch.timeInterval} seconds`);
        return this.timeInterval;
    }
    }

let timerFirst = new Timer(10,100);
console.log(timerFirst);

let timerSecond = new Timer(5,55);
console.log(timerSecond);

let stopWatch = new Timer(0,0);
console.log(stopWatch);
Timer.timeToNY(today, newYear);