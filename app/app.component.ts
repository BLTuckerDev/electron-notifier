import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list'

import { APP_PROVIDERS } from './app.providers';
import {LandingComponent} from "./landing/landing.component";

@Component({
  selector: 'electron-notifier-app',
  template: `<router-outlet></router-outlet>`,
  directives: [ ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_GRID_LIST_DIRECTIVES ],
  providers: [ APP_PROVIDERS ],
  precompile: [LandingComponent]
})
export class ElectronNotifierAppComponent {

  constructor() {

  }

}
