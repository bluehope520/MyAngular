import { Routes } from '@angular/router';
import { Demo } from './demo';
import { ChildRoutes } from './child-routes/child-routes';
import { Login } from './login/login';
import { Admin } from './admin/admin';
import { authChildGuard, authGuard } from './auth/auth-guard';
import { Post } from '../post/post';
import { AdminDashboard } from './admin/admin-dashboard/admin-dashboard';
import { canDeactivateGuard } from './admin/can-deactivate-guard';

export const demoRoutes: Routes = [
  {
    path: 'demo',
    component: Demo,
    children: [
      { path: 'child-routes', component: ChildRoutes },
      { path: 'login', component: Login },
      {
        path: 'admin',
        component: Admin,
        canActivate: [authGuard],
        canActivateChild: [authChildGuard],
        canDeactivate: [canDeactivateGuard],
        children: [
          { path: 'dashboard', component: AdminDashboard },
          { path: 'post', component: Post },
        ],
      },
    ],
  },
];
