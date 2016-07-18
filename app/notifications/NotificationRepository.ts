import {Injectable} from "@angular/core";
import {AppNotification} from "../appNotification";


@Injectable()
export class NotificationRepository{

    private notifications: Array<AppNotification>;

    constructor(){
        this.notifications = [];
    }

    public saveNotification(notification: AppNotification){
        console.log("Pushing notification into array");
        this.notifications.push(notification);
    }

}