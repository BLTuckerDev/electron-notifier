import { bind } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

export const APP_PROVIDERS = [
  HTTP_PROVIDERS,
  bind(LocationStrategy).toClass(HashLocationStrategy)
];
