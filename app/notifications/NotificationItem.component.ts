import {Component, Input} from "@angular/core"
import {AppNotification} from "../appNotification";


/*
 notification


 */
@Component({
  selector: "notification-item",
  templateUrl: "app/notifications/notification-item.html"
})
export class NotificationItem {

  @Input() appNotification: AppNotification;

  constructor(){

  }

}
