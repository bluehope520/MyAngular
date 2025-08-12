import { Injectable } from '@angular/core';
import { Color } from '../components/models/post.model';
import { colors } from '../colors';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  colors: Color[] = colors;
  index() {
    return this.colors;
  }
  show(id: number) {
    return this.colors.find((c) => (c.id = id));
  }
}
