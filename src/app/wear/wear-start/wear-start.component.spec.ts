import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WearStartComponent } from './wear-start.component';

describe('WearStartComponent', () => {
  let component: WearStartComponent;
  let fixture: ComponentFixture<WearStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WearStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WearStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
