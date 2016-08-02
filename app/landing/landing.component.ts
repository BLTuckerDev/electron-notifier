import {Component, Inject} from "@angular/core";
import {AppNotification} from "../appNotification";
import {FormControl} from "@angular/forms";
import {NotificationRepository} from "../notifications/NotificationRepository";
import {NotificationItem} from "../notifications/NotificationItem.component";
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from "@angular2-material/sidenav/sidenav";
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";
import {MD_INPUT_DIRECTIVES} from "@angular2-material/input/input";
import {isNumber} from "@angular/forms/src/facade/lang";



@Component({selector: 'landing',
  templateUrl: `app/landing/landing.html`,
  directives: [NotificationItem, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_INPUT_DIRECTIVES]
})
export class LandingComponent{

  private notificationRepository: NotificationRepository;

  private formErrorMessage: string = "";

  constructor(@Inject(NotificationRepository) notificationRepository : NotificationRepository){
    console.log("Creating landing component");
    this.notificationRepository = notificationRepository;
  }

  public onSubmit(formData: NotificationFormData){
    if(!this.validateFormData(formData)){
      return;
    }

    this.formErrorMessage = "";

    var notification = new AppNotification(formData.notificationText, formData.notificationPeriod);
    this.notificationRepository.saveNotification(notification);
    notification.start();
  }

  onDeleteEvent(deletedAppNotification: AppNotification){
    this.notificationRepository.removeNotification(deletedAppNotification);
  }

  private validateFormData(formData: NotificationFormData): boolean{

    var timePeriod = Number(formData.notificationPeriod);

    var hasText: boolean = formData.notificationText.length > 0;
    var hasNumericNotificationPeriodGreaterThanZero: boolean = Number.isInteger(timePeriod) && timePeriod > 0;

    if(!hasText){
      this.formErrorMessage = "You must enter a reminder to be reminded of!";
    } else if(!hasNumericNotificationPeriodGreaterThanZero){
      this.formErrorMessage = "Your notification period must be a number larger than 0";
    }

    return hasText && hasNumericNotificationPeriodGreaterThanZero;
  }

}


class NotificationFormData {
  public notificationText: string;
  public notificationPeriod: number;
}
