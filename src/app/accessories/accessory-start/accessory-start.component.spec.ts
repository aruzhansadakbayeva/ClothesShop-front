import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoryStartComponent } from './accessory-start.component';

describe('AccessoryStartComponent', () => {
  let component: AccessoryStartComponent;
  let fixture: ComponentFixture<AccessoryStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoryStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoryStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
