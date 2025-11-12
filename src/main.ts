import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// Import global CSS libraries (works with ESBuild in Angular 17+)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import 'aos/dist/aos.css';
import 'aos/dist/aos.js';

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));
