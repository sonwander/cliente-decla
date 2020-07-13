import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeThreeComponent } from './theme-three.component';

describe('ThemeThreeComponent', () => {
  let component: ThemeThreeComponent;
  let fixture: ComponentFixture<ThemeThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
