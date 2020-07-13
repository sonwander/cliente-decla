import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSixComponent } from './theme-six.component';

describe('ThemeSixComponent', () => {
  let component: ThemeSixComponent;
  let fixture: ComponentFixture<ThemeSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
