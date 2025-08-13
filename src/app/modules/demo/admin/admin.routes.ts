import { Routes } from '@angular/router';
import { authChildGuard, authGuard, authMatchGuard } from '../auth/auth-guard';
import { Post } from '../../post/post';
import { Admin } from './admin';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { canDeactivateGuard } from './can-deactivate-guard';

export const adminRoutes: Routes = [
  {
    path: '',
    component: Admin,
    //是否登入驗證
    canActivate: [authGuard],
    canActivateChild: [authChildGuard],
    //是否離開當前頁面驗證
    canDeactivate: [canDeactivateGuard],
    children: [
      { path: 'dashboard', component: AdminDashboard },
      { path: 'post', component: Post },
    ],
  },
];
