import { Routes } from '@angular/router';
import { WrapComponent } from './wrapper/wrapper.component';

export const appRoute: Routes = [
  { path: '', redirectTo: '/cars', pathMatch: 'full' },
  { path: 'cars', component: WrapComponent },
];
