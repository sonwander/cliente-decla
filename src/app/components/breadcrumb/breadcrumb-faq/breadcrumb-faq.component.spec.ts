import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbFaqComponent } from './breadcrumb-faq.component';

describe('BreadcrumbFaqComponent', () => {
  let component: BreadcrumbFaqComponent;
  let fixture: ComponentFixture<BreadcrumbFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
