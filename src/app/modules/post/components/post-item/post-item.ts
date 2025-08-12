import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Color } from '../models/post.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-post-item',
  imports: [RouterModule],
  templateUrl: './post-item.html',
  styleUrl: './post-item.css',
})
export class PostItem {
  @Input() color!: Color;

  @Output() remove = new EventEmitter();

  onClick(color: Color) {
    this.remove.emit(color);
  }
}
