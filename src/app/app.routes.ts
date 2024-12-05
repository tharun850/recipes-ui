import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorPageComponent } from './components/atoms/error-page/error-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'error', component: ErrorPageComponent }
];
