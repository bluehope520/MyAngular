import { Routes } from '@angular/router';
import { Post } from './post';
import { PostDetail } from './components/post-detail/post-detail';
import { PostDetailResolve } from './services/post-detail-resolve';

export const postRoutes: Routes = [
  { path: 'post', component: Post },
  {
    path: 'post/:id',
    resolve: {
      color: PostDetailResolve,
    },
    component: PostDetail,
  },
];
