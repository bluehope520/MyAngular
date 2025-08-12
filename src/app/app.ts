import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Post } from './modules/post/post';
import { Header } from './core/components/header/header';

@Component({
  selector: 'app-root',
  imports: [Post, Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
