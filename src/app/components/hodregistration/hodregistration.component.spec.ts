import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodregistrationComponent } from './hodregistration.component';

describe('HodregistrationComponent', () => {
  let component: HodregistrationComponent;
  let fixture: ComponentFixture<HodregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HodregistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HodregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
