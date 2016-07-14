import { bind } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {NotificationRepository} from "./notifications/NotificationRepository";

export const APP_PROVIDERS = [
    HTTP_PROVIDERS,
    NotificationRepository,
    bind(LocationStrategy).toClass(HashLocationStrategy)
];
