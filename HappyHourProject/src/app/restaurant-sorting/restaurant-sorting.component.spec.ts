import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSortingComponent } from './restaurant-sorting.component';

describe('RestaurantSortingComponent', () => {
  let component: RestaurantSortingComponent;
  let fixture: ComponentFixture<RestaurantSortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantSortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
