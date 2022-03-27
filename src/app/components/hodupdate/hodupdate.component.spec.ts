import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodupdateComponent } from './hodupdate.component';

describe('HodupdateComponent', () => {
  let component: HodupdateComponent;
  let fixture: ComponentFixture<HodupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
