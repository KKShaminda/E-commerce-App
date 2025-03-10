import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';

bootstrapApplication(AppComponent, HomeComponent, appConfig)
  .catch((err) => console.error(err));
