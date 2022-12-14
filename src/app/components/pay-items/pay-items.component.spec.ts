import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayItemsComponent } from './pay-items.component';

describe('PayItemsComponent', () => {
  let component: PayItemsComponent;
  let fixture: ComponentFixture<PayItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
