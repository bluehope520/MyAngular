import { Routes } from '@angular/router';
import { Demo } from './demo';
import { ChildRoutes } from './child-routes/child-routes';
import { Login } from './login/login';
import { Admin } from './admin/admin';

export const demoRoutes: Routes = [
  {
    path: 'demo',
    component: Demo,
    children: [
      { path: 'child-routes', component: ChildRoutes },
      { path: 'login', component: Login },
      { path: 'admin', component: Admin },
    ],
  },
];
