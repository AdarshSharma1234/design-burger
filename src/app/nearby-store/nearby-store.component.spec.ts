import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyStoreComponent } from './nearby-store.component';

describe('NearbyStoreComponent', () => {
  let component: NearbyStoreComponent;
  let fixture: ComponentFixture<NearbyStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NearbyStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
