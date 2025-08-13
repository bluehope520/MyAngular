import { TestBed } from '@angular/core/testing';

import { SelectivePreloadingStrategy } from './selective-preloading-strategy';

describe('SelectivePreloadingStrategy', () => {
  let service: SelectivePreloadingStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectivePreloadingStrategy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
