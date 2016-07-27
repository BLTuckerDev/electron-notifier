import {Component, Inject} from "@angular/core";
import {AppNotification} from "../appNotification";
import {FormControl} from "@angular/forms";
import {NotificationRepository} from "../notifications/NotificationRepository";
import {NotificationItem} from "../notifications/NotificationItem.component";
import {MD_GRID_LIST_DIRECTIVES} from '@angular2-material/grid-list'
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';



@Component({selector: 'landing',
  templateUrl: `app/landing/landing.html`,
  directives: [NotificationItem, MD_GRID_LIST_DIRECTIVES, MD_BUTTON_DIRECTIVES]
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
