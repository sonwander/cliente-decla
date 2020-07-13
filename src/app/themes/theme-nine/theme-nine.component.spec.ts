import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeNineComponent } from './theme-nine.component';

describe('ThemeNineComponent', () => {
  let component: ThemeNineComponent;
  let fixture: ComponentFixture<ThemeNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
