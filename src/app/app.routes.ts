import { Routes } from '@angular/router';
import { postRoutes } from './modules/post/post.routes';
import { userRoutes } from './modules/user/user.routes';
import { PageNotFound } from './core/components/page-not-found/page-not-found';
import { demoRoutes } from './modules/demo/demo.routes';
import { MessageBox } from './core/components/message-box/message-box';

export const routes: Routes = [
  ...postRoutes,
  ...userRoutes,
  ...demoRoutes,
  { path: 'message', outlet: 'popup', component: MessageBox },
  { path: '', redirectTo: '/post', pathMatch: 'full' },
  { path: '**', component: PageNotFound },
];
