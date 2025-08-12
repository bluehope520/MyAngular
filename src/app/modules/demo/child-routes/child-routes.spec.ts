import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRoutes } from './child-routes';

describe('ChildRoutes', () => {
  let component: ChildRoutes;
  let fixture: ComponentFixture<ChildRoutes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildRoutes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildRoutes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
