import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  RedirectCommand,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Color } from '../components/models/post.model';
import { PostService } from './post-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostDetailResolve implements Resolve<Color> {
  private postService = inject(PostService);
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Color> {
    console.log('Post Detail resolve service');
    const postId = Number(route.paramMap.get('id'));

    return this.postService.show(postId);
  }
}
