import {Component, Inject} from "@angular/core";
import {AppNotification} from "../appNotification";
import {FormControl} from "@angular/forms";
import {NotificationRepository} from "../notifications/NotificationRepository";

@Component({selector: 'landing',
  templateUrl: `app/landing/landing.html`
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

}


class NotificationFormData {
  public notificationText: string;
  public notificationPeriod: number;
}