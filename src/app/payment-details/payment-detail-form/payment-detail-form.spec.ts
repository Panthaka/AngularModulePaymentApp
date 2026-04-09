import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDetailForm } from './payment-detail-form';

describe('PaymentDetailForm', () => {
  let component: PaymentDetailForm;
  let fixture: ComponentFixture<PaymentDetailForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentDetailForm],
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentDetailForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
