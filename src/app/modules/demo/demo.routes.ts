import { Routes } from '@angular/router';
import { Demo } from './demo';
import { ChildRoutes } from './child-routes/child-routes';
import { Login } from './login/login';
import { authMatchGuard } from './auth/auth-guard';

export const demoRoutes: Routes = [
  {
    path: '',
    component: Demo,
    children: [
      { path: 'child-routes', component: ChildRoutes },
      { path: 'login', component: Login },
      {
        path: 'admin',
        canMatch: [authMatchGuard],
        loadChildren: () =>
          import('./admin/admin.routes').then((r) => r.adminRoutes),
      },
    ],
  },
];
