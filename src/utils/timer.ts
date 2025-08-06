class Timer {
    time: number;
    timeInterval: NodeJS.Timeout;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;

    constructor() {
        this.time = 0;
        this.seconds = this.minutes = this.hours = this.days = 0;
    }

    start(): void {
        this.timeInterval = setInterval(() => {
            this.time++; this.seconds++;
            this.convert();
        }, 1000);
    }
    // start(makeChange: (_: number) => void = (_: number) => {}): void {
    //     this.timeInterval = setInterval(() => {
    //         this.time++; this.seconds++;
    //         this.convert();

    //         // if ( this.hours === 0 && this.days === 0
    //         //     && this.minutes === 5) {
    //         //     makeChange(1);
    //         // }
            
    //         if (this.hours + this.days + this.minutes === 0 &&
    //             this.seconds === 20) {
    //             makeChange(1);
    //         }

    //     }, 1000);
    // }

    convert(): void {
        if(this.seconds >= 60) {
            this.minutes++;
            this.seconds -= 60;
        }
        if(this.minutes >= 60) {
            this.hours++;
            this.minutes -= 60;
        }
        if(this.hours >= 24) {
            this.days++;
            this.hours -= 24;
        }
    }

    stop(): void {
        clearInterval(this.timeInterval)
    }
}

export default Timer;