import {Component} from "@angular/core";
import {AppNotification} from "../appNotification";

@Component({selector: 'landing',
  templateUrl: `app/landing/landing.html`
})
export class LandingComponent{

  constructor(){

    var notification = new AppNotification(3);

    notification.start();
    
  }

}
