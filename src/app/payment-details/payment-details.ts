import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-payment-details',
  standalone: false,
  templateUrl: './payment-details.html',
  styleUrls: ['./payment-details.css'],
})
export class PaymentDetails {
public cardNumberParent = signal('Panthaka');

}
