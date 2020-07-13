import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTwoComponent } from './error-two.component';

describe('ErrorTwoComponent', () => {
  let component: ErrorTwoComponent;
  let fixture: ComponentFixture<ErrorTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
