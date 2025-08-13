import { Component, DestroyRef, inject, signal } from '@angular/core';
import { PostService } from '../../../post/services/post-service';
import { Color } from '../../../post/components/models/post.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-my-list',
  imports: [],
  templateUrl: './my-list.html',
  styleUrl: './my-list.css',
})
export class MyList {
  private postService = inject(PostService);
  // colors: Observable<Color[]> = this.postService
  //   .getMyList()
  //   .subscribe((data) => (this.colors = data));
  // colors!: Color[];
  colors = signal<Color[]>([]);

  ngOnInit() {
    this.postService.getMyList().subscribe((list) => this.colors.set(list));
  }

  removeItemFormList(colorId: number) {
    console.log('removeItemFormList');
    this.postService.removeItemFormList(colorId).subscribe(() => {
      this.colors.update((list) => list.filter((x) => x.id !== colorId));
    });
  }
}
