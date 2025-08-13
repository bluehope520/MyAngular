import { Routes } from '@angular/router';
import { postRoutes } from './modules/post/post.routes';
import { userRoutes } from './modules/user/user.routes';
import { PageNotFound } from './core/components/page-not-found/page-not-found';
import { demoRoutes } from './modules/demo/demo.routes';
import { MessageBox } from './core/components/message-box/message-box';

export const routes: Routes = [
  ...postRoutes,
  ...userRoutes,
  // ...demoRoutes,
  {
    path: 'demo',
    //loadChildren 延遲加載lazyloading
    loadChildren: () =>
      import('./modules/demo/demo.routes').then((d) => d.demoRoutes),
    //設定data preload: true,使原本延遲加載,可以預加載
    data: {
      preload: true,
    },
  },
  { path: 'message', outlet: 'popup', component: MessageBox },
  { path: '', redirectTo: '/post', pathMatch: 'full' },
  { path: '**', component: PageNotFound },
];
