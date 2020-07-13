import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogThreeColumnComponent } from './blog-three-column.component';

describe('BlogThreeColumnComponent', () => {
  let component: BlogThreeColumnComponent;
  let fixture: ComponentFixture<BlogThreeColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogThreeColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogThreeColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
