import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WearItemComponent } from './wear-item.component';

describe('WearItemComponent', () => {
  let component: WearItemComponent;
  let fixture: ComponentFixture<WearItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WearItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WearItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
