import { Component, inject } from '@angular/core';
import { PostItem } from './components/post-item/post-item';
import { Color } from './components/models/post.model';
import { colors } from './colors';
import { PostService } from './services/post-service';

@Component({
  selector: 'app-post',
  imports: [PostItem],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {
  private postService = inject(PostService);

  title = 'Posts';
  colors: Color[] = this.postService.index();
  // colors = [
  //   { id: 1, color: 'blue', feel: 'Feels calm and cool.' },
  //   { id: 2, color: 'red', feel: 'Looks bold and warm.' },
  //   { id: 3, color: 'green' },
  //   { id: 4, color: 'yellow', feel: 'Shines bright and cheerful.' },
  // ];

  removeItem(color: Color) {
    console.warn('removeItem', color);
    this.colors = this.colors.filter((c) => c.id !== color.id);
  }
}
