import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoOneComponent } from './promo-one.component';

describe('PromoOneComponent', () => {
  let component: PromoOneComponent;
  let fixture: ComponentFixture<PromoOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
