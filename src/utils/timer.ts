class Timer {
    time: number;
    timeInterval: NodeJS.Timeout;

    constructor() {
        this.time = 0;
    }

    start(): void {
        this.timeInterval = setInterval(() => {
            this.time++;
        }, 1000);
    }
}