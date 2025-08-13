import { inject, Injectable } from '@angular/core';
import { Color } from '../components/models/post.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, retry, throwError, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private http = inject(HttpClient);
  postApi = 'http://localhost:3000/post';
  myListApi = 'http://localhost:3000/my-list';
  // colors: Color[] = colors;
  index() {
    return this.http.get<Color[]>(this.postApi).pipe(
      catchError(this.handleError),
      retry({
        count: 3,
        delay: () => timer(3000), // 每次間隔 3s
      })
    );
  }
  show(id: number) {
    return this.http.get<Color>(`${this.postApi}/${id}`);
  }
  private handleError = (error: HttpErrorResponse): Observable<never> => {
    // 你也可以依 status 客製化訊息
    const msg =
      error.error?.message ||
      `HTTP ${error.status} ${error.statusText || ''}`.trim();
    return throwError(() => new Error(msg)); // 或：throwError(() => error)
  };

  addToList(color: Color) {
    return this.http.post<Color>(this.myListApi, color);
  }
  getMyList() {
    return this.http.get<Color[]>(this.myListApi);
  }
  removeItemFormList(colorId: number) {
    return this.http.delete(`${this.myListApi}/${colorId}`);
  }
}
