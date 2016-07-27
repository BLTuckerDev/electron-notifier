import {Component, Input, Output, EventEmitter} from "@angular/core"
import {AppNotification} from "../appNotification";
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list'

@Component({
  selector: "notification-item",
  templateUrl: "app/notifications/notification-item.html",
  styleUrls: ["assets/css/style.css"],
  directives: [MD_BUTTON_DIRECTIVES, MD_CARD_DIRECTIVES, MD_GRID_LIST_DIRECTIVES]
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
