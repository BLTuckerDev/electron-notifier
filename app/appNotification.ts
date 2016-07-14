
export class AppNotification {

    message: string;
    notificationPeriodInMinutes: number;

    intervalId: number;

    constructor(message: string, notificationPeriodInMinutes: number){
        this.message = message;
        this.notificationPeriodInMinutes = notificationPeriodInMinutes;
    }


    start(): void {
        this.intervalId = setInterval(function () {
            console.log("Timeout!");
        }, this.notificationPeriodInMinutes * 60 * 1000);
    }

    stop() : void{
        clearInterval(this.intervalId);
    }

}




