declare var Notification: any;

export class AppNotification {

    static SECONDS_IN_MINUTE = 60;
    static MILLISECONDS_IN_SECOND = 1000;

    message: string;
    notificationPeriodInMinutes: number;

    intervalId: number;

    constructor(message: string, notificationPeriodInMinutes: number){
        this.message = message;
        this.notificationPeriodInMinutes = notificationPeriodInMinutes;
    }

    start(): void {
      var title = this.message;

      this.intervalId = setInterval(function () {
            console.log("Firing notification!");
            new Notification(title, {});
        }, this.notificationPeriodInMinutes * AppNotification.SECONDS_IN_MINUTE * AppNotification.MILLISECONDS_IN_SECOND);
    }

    stop() : void{
        clearInterval(this.intervalId);
    }
}




