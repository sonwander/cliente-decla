import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeEightComponent } from './theme-eight.component';

describe('ThemeEightComponent', () => {
  let component: ThemeEightComponent;
  let fixture: ComponentFixture<ThemeEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
