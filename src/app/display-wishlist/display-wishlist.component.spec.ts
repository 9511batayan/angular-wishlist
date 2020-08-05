import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWishlistComponent } from './display-wishlist.component';

describe('DisplayWishlistComponent', () => {
  let component: DisplayWishlistComponent;
  let fixture: ComponentFixture<DisplayWishlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayWishlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
