import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Color } from '../models/post.model';
import { colors } from '../../colors';
import { PostService } from '../../services/post-service';

@Component({
  selector: 'app-post-detail',
  imports: [],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css',
})
export class PostDetail {
  private route = inject(ActivatedRoute);
  private postService = inject(PostService);
  color!: Color;

  id = this.route.paramMap.subscribe((params) => {
    const colorId = Number(params.get('id'));
    console.warn('colorId', colorId);
    this.color = this.postService.show(colorId)!;
  });
}
