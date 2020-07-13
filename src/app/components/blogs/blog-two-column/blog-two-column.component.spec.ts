import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTwoColumnComponent } from './blog-two-column.component';

describe('BlogTwoColumnComponent', () => {
  let component: BlogTwoColumnComponent;
  let fixture: ComponentFixture<BlogTwoColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogTwoColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogTwoColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
