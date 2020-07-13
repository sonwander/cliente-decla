import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLeftSidebarComponent } from './blog-left-sidebar.component';

describe('BlogLeftSidebarComponent', () => {
  let component: BlogLeftSidebarComponent;
  let fixture: ComponentFixture<BlogLeftSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogLeftSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
