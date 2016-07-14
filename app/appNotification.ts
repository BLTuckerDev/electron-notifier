
export class AppNotification {

    notificationPeriodInSeconds: number;

    intervalId: number;

    constructor(notificationPeriodInSeconds: number){
        this.notificationPeriodInSeconds = notificationPeriodInSeconds;
    }


    start(): void {
        this.intervalId = setInterval(function () {
            console.log("Timeout!");
        }, this.notificationPeriodInSeconds * 1000);
    }

    stop() : void{
        clearInterval(this.intervalId);
    }

}




