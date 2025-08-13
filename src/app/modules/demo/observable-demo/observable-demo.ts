import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  filter,
  interval,
  map,
  Observable,
  of,
  pipe,
  Subscription,
} from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  imports: [],
  templateUrl: './observable-demo.html',
  styleUrl: './observable-demo.css',
})
export class ObservableDemo implements OnInit, OnDestroy {
  // demoObservable: Observable<string> = of('hello', 'hola', '你好');
  demoObservable: Observable<any> = interval(1000).pipe(
    filter((value: number) => value % 2 !== 0),
    map((value) => `#@ ${value}`)
  );
  demoSubscription!: Subscription;

  ngOnInit() {}

  ngOnDestroy() {
    if (this.demoSubscription) {
      console.log('ngOnDestroy: Unsubscribe demo Observable');
      this.demoSubscription.unsubscribe();
    }
  }
  onClick() {
    const observe = {
      next: (value: any) => console.log('value', value),
      error: (error: any) => console.log('value', error),
      complete: () => console.log('Demo Observable Complete'),
    };
    this.demoSubscription = this.demoObservable.subscribe(observe);
  }

  unsubscribe() {
    this.demoSubscription.unsubscribe();
  }
}
