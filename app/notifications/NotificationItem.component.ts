import {Component, Input, Output, EventEmitter} from "@angular/core"
import {AppNotification} from "../appNotification";


@Component({
  selector: "notification-item",
  templateUrl: "app/notifications/notification-item.html"
})
export class NotificationItem {

  @Input() appNotification: AppNotification;
  @Output() deleteEvent: EventEmitter<AppNotification>;

  constructor(){
    this.deleteEvent = new EventEmitter<AppNotification>();
  }

  public onStart(){
    this.appNotification.start();
  }

  public onStop(){
    this.appNotification.stop();
  }

  public onDelete(){
    this.deleteEvent.emit(this.appNotification);
  }

}
