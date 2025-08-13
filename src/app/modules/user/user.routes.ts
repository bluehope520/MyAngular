import { Routes } from '@angular/router';
import { Register } from './components/register/register';
import { MyList } from './components/my-list/my-list';

export const userRoutes: Routes = [
  { path: 'user', component: Register },
  { path: 'my-list', component: MyList },
];
