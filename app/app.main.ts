import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { disableDeprecatedForms, provideForms } from '@angular/forms'

import { ElectronNotifierAppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

//enableProdMode(); //Uncomment for production

bootstrap(ElectronNotifierAppComponent, [ APP_ROUTER_PROVIDERS, disableDeprecatedForms(), provideForms() ])
  .then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
  );
