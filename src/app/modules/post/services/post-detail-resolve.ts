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

@Injectable({
  providedIn: 'root',
})
export class PostDetailResolve implements Resolve<Color> {
  private postService = inject(PostService);
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<Color | RedirectCommand> {
    console.log('Post Detail resolve service');
    const postId = Number(route.paramMap.get('id'));
    let data = this.postService.show(postId);
    console.log('Post Detail resolve service data', data);
    if (!data) {
      data = { id: 5, color: 'this color is undefined' };
    }
    console.log('Post Detail resolve service data', data);

    return data;
  }
}
