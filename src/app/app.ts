import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Post } from './modules/post/post';

@Component({
  selector: 'app-root',
  imports: [Post, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  title = 'Hope';
}
