import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list'
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav'
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input'
import { APP_PROVIDERS } from './app.providers';
import {LandingComponent} from "./landing/landing.component";

@Component({
  selector: 'electron-notifier-app',
  template: `<router-outlet></router-outlet>`,
  directives: [ ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_GRID_LIST_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_INPUT_DIRECTIVES ],
  providers: [ APP_PROVIDERS ],
  precompile: [LandingComponent],
  styleUrls: ['assets/css/style.css']
})
export class ElectronNotifierAppComponent {

  constructor() {

  }

}
