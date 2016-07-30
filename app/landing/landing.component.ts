import {Component, Inject} from "@angular/core";
import {AppNotification} from "../appNotification";
import {FormControl} from "@angular/forms";
import {NotificationRepository} from "../notifications/NotificationRepository";
import {NotificationItem} from "../notifications/NotificationItem.component";
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from "@angular2-material/sidenav/sidenav";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input/input";



@Component({selector: 'landing',
  templateUrl: `app/landing/landing.html`,
  directives: [NotificationItem, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_INPUT_DIRECTIVES]
})
export class LandingComponent{

  private notificationRepository: NotificationRepository;

  constructor(@Inject(NotificationRepository) notificationRepository : NotificationRepository){
    console.log("Creating landing component");
    this.notificationRepository = notificationRepository;
  }

  public onSubmit(formData: NotificationFormData){
    //todo validate
    console.log("onSubmit");
    var notification = new AppNotification(formData.notificationText, formData.notificationPeriod);
    this.notificationRepository.saveNotification(notification);
    notification.start();
  }

  onDeleteEvent(deletedAppNotification: AppNotification){
    this.notificationRepository.removeNotification(deletedAppNotification);
  }

}


class NotificationFormData {
  public notificationText: string;
  public notificationPeriod: number;
}
