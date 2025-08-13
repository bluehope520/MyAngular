import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  private router = inject(Router);
  color!: Color;
  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe((params) => {
    //   const colorId = Number(params.get('id'));
    //   console.warn('colorId', colorId);
    //   this.color = this.postService.show(colorId)!;
    // });
    this.route.data.subscribe((data) => {
      this.color = data['color'];
    });
  }

  gotoPost = (c: Color) => {
    this.router.navigate(['/post', { id: c.id }]);
  };
}
