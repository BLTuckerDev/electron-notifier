import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { APP_PROVIDERS } from './app.providers';
import {LandingComponent} from "./landing.component";

@Component({
  selector: 'electron-notifier-app',
  template: `<router-outlet></router-outlet>`,
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ APP_PROVIDERS ],
  precompile: [LandingComponent]
})
export class ElectronNotifierAppComponent {

  constructor() {

  }

}
