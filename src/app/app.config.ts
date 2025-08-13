import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { SelectivePreloadingStrategy } from './core/services/selective-preloading-strategy';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    //withPreloading(SelectivePreloadingStrategy)使用自訂的預加載策略
    provideRouter(routes, withPreloading(SelectivePreloadingStrategy)),
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
  ],
};
