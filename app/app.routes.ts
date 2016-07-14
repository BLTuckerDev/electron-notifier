import { provideRouter, RouterConfig } from '@angular/router';

import {LandingComponent} from "./landing/landing.component";

const routes: RouterConfig = [
  { path: '',  terminal: true, redirectTo: '/home' },
  { path: 'home',  terminal: true, component: LandingComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
