import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'courses',
    loadComponent: () =>
      import('./courses/courses.component').then(m => m.CoursesComponent)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'portal',
    loadComponent: () =>
      import('./portal/portal.component').then(m => m.PortalComponent)
  }
];
