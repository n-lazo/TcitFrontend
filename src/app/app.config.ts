import { ApplicationConfig } from '@angular/core';

import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { provideHttpClient } from '@angular/common/http';

import { postReducer} from './state/post.reducer';
import { PostEffects } from './state/post.effects';


export const appConfig: ApplicationConfig = {
  providers: [
    //provideZoneChangeDetection(),
    //provideRouter(routes),
    provideStore({ post: postReducer }),
    provideEffects([PostEffects]),
    provideHttpClient()
  ]
};
