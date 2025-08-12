import { Routes } from '@angular/router';
import { Demo } from './demo';
import { ChildRoutes } from './child-routes/child-routes';

export const demoRoutes: Routes = [
  {
    path: 'demo',
    component: Demo,
    children: [{ path: 'child-routes', component: ChildRoutes }],
  },
];
