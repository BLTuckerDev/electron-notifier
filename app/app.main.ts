import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { ElectronNotifierAppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';

//enableProdMode(); //Uncomment for production

bootstrap(ElectronNotifierAppComponent, [ APP_ROUTER_PROVIDERS ])
  .then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
  );
