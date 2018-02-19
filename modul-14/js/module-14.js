function Timer () {
    this.startTime = 0;
    this.stopTime = 0;
    this.timeInterval = 0;
}
let elementIsClicked = false;
let seconds = 0;
Timer.prototype = {
    Start(){
        seconds = btnEvent.stopTime;
        btnEvent.startTime = seconds;
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
                btnEvent.stopTime = seconds;
                btnEvent.timeInterval = btnEvent.stopTime - btnEvent.startTime;
                console.log(`The value of interval = ${btnEvent.timeInterval} seconds`);
                elementIsClicked = false;
               }
        }, 1000);
    },
    Stop(){
          elementIsClicked = true;
        }
    };
let btnEvent = new Timer;