import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Color } from '../models/post.model';
import { RouterModule } from '@angular/router';
import { PostService } from '../../services/post-service';

@Component({
  selector: 'app-post-item',
  imports: [RouterModule],
  templateUrl: './post-item.html',
  styleUrl: './post-item.css',
})
export class PostItem {
  private postService = inject(PostService);
  @Input() color!: Color;

  @Output() remove = new EventEmitter();

  onClick(color: Color) {
    this.remove.emit(color);
  }

  addToList(color: Color) {
    this.postService.addToList(color).subscribe();
  }
}
