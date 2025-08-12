import { TestBed } from '@angular/core/testing';

import { PostDetailResolve } from './post-detail-resolve';

describe('PostDetailResolve', () => {
  let service: PostDetailResolve;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostDetailResolve);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
