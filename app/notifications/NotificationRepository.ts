import {Injectable} from "@angular/core";
import {AppNotification} from "../appNotification";


@Injectable()
export class NotificationRepository{

    notifications: Array<AppNotification>;

    constructor(){
        this.notifications = [];
    }

    public saveNotification(notification: AppNotification){
        this.notifications.push(notification);
    }

    public removeNotification(notification: AppNotification){
        if(notification.isStarted()){
            notification.stop();
        }
        var indexOf = this.notifications.indexOf(notification);
        this.notifications.splice(indexOf, 1);
    }
}