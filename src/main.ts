import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// Import global CSS libraries (works with ESBuild in Angular 17+

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
