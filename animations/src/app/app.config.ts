import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DecimalPipe } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), DecimalPipe]
};
