import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorOneComponent } from './error-one.component';

describe('ErrorOneComponent', () => {
  let component: ErrorOneComponent;
  let fixture: ComponentFixture<ErrorOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
