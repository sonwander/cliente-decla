import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbContactComponent } from './breadcrumb-contact.component';

describe('BreadcrumbContactComponent', () => {
  let component: BreadcrumbContactComponent;
  let fixture: ComponentFixture<BreadcrumbContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
