import { Component, inject, signal } from '@angular/core';
import { PostItem } from './components/post-item/post-item';
import { Color } from './components/models/post.model';
import { colors } from './colors';
import { PostService } from './services/post-service';
import { ActivatedRoute } from '@angular/router';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-post',
  imports: [PostItem],
  templateUrl: './post.html',
  styleUrl: './post.css',
})
export class Post {
  private postService = inject(PostService);
  private route = inject(ActivatedRoute);

  title = 'Posts';
  // 1) 顏色清單用「可寫 Signal」
  colors = signal<Color[]>([]);

  // 2) 從路由讀取 id，用 toSignal（undefined 代表未選）
  selectedId = toSignal(
    this.route.paramMap.pipe(
      map((p) => (p.get('id') !== null ? Number(p.get('id')) : undefined))
    ),
    { initialValue: undefined }
  );

  ngOnInit() {
    // 把 API 回來的資料塞進 Signal → 觸發重繪
    this.postService.index().subscribe({
      next: (data) => this.colors.set(data),
      error: (err) => console.warn('HttpErrorResponse:', err),
    });
  }

  // selectedId?: number;
  // ngOnInit() {
  //   this.activatedRoute.paramMap.subscribe((params) => {
  //     const colorId = Number(params.get('id'));
  //     this.selectedId = colorId;
  //   });

  //   const color$ = this.postService.index();
  //   const observer = {
  //     next: (data: Color[]) => {
  //       this.colors = data;
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       console.warn('HttpErrorResponse:', error);
  //     },
  //   };
  //   color$.subscribe(observer);
  // }

  // colors = [
  //   { id: 1, color: 'blue', feel: 'Feels calm and cool.' },
  //   { id: 2, color: 'red', feel: 'Looks bold and warm.' },
  //   { id: 3, color: 'green' },
  //   { id: 4, color: 'yellow', feel: 'Shines bright and cheerful.' },
  // ];

  removeItem(color: Color) {
    this.colors.update((list) => list.filter((c) => c.id !== color.id));
  }

  // removeItem(color: Color) {
  //   console.warn('removeItem', color);
  //   this.colors = this.colors.filter((c) => c.id !== color.id);
  // }
}
