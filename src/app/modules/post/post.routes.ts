import { Routes } from '@angular/router';
import { Post } from './post';
import { PostDetail } from './components/post-detail/post-detail';

export const postRoutes: Routes = [
  { path: 'post', component: Post },
  { path: 'post/:id', component: PostDetail },
];
