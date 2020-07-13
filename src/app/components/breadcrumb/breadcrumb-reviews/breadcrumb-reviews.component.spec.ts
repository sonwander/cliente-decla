import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbReviewsComponent } from './breadcrumb-reviews.component';

describe('BreadcrumbReviewsComponent', () => {
  let component: BreadcrumbReviewsComponent;
  let fixture: ComponentFixture<BreadcrumbReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
