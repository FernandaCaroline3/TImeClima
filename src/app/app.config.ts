import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
<<<<<<< HEAD
import { provideHttpClient } from '@angular/common/http';
=======
>>>>>>> e01549ed32b2c68a78897161bc235092c9ac42a8

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
<<<<<<< HEAD
    provideRouter(routes),
    provideHttpClient()
  ]
};
=======
    provideRouter(routes)
  ]
};
>>>>>>> e01549ed32b2c68a78897161bc235092c9ac42a8
