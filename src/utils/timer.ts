class Timer {
    time: number;
    timeInterval: NodeJS.Timeout;

    constructor() {
        this.time = 0;
        console.log("Making timer");
    }

    start(makeChange: (_: number) => void = (_: number) => {}): void {
        this.timeInterval = setInterval(() => {
            this.time++;

            const time = this.convert();
            if (time.length === 2 && time[0] === 5) {
                // idk we have to make a change here
                makeChange(1);
            }
            // if (time.length === 1 && time[0] === 20) {
            //     // idk we have to make a change here
            //     makeChange(1);
            // }

        }, 1000);
    }

    convert(): Array<number> {
        let remainingTime = this.time
        const convertion = []

        if(remainingTime >= 60*60*24) {
            const days = Math.floor(remainingTime / (60*60*24));
            convertion.push(days);
            remainingTime -= (days * (60*60*24))
        }

        if(remainingTime >= 60*60) {
            const hrs = Math.floor(remainingTime / (60*60));
            convertion.push(hrs);
            remainingTime -= (hrs * (60*60))
        }

        if(remainingTime >= 60) {
            const mins = Math.floor(remainingTime / 60);
            convertion.push(mins);
            remainingTime -= (mins * 60);
        }

        convertion.push(remainingTime)

        return convertion
    }

    // stop(): void {
    //     this.timeInterval()
    // }
}

export default Timer;