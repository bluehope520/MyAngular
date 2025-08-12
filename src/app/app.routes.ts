import { Routes } from '@angular/router';
import { postRoutes } from './modules/post/post.routes';
import { userRoutes } from './modules/user/user.routes';
import { PageNotFound } from './core/components/page-not-found/page-not-found';

export const routes: Routes = [
  ...postRoutes,
  ...userRoutes,
  { path: '', redirectTo: '/post', pathMatch: 'full' },
  { path: '**', component: PageNotFound },
];
