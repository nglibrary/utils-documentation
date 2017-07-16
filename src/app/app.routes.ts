import { Routes } from '@angular/router';
import { ControlInfoDirComponent } from './features/control-info-dir/component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'control-info', component: ControlInfoDirComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: NotfoundComponent }
];
