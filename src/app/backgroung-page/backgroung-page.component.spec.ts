import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroungPageComponent } from './backgroung-page.component';

describe('BackgroungPageComponent', () => {
  let component: BackgroungPageComponent;
  let fixture: ComponentFixture<BackgroungPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroungPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroungPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
