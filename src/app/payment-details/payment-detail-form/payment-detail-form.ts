import { Component, model } from '@angular/core';

@Component({
  selector: 'app-payment-detail-form',
  standalone: false,
  templateUrl: './payment-detail-form.html',
  styleUrls: ['./payment-detail-form.css'],
})
export class PaymentDetailForm {

  cardNumberChild= model('');

  onInput(event: Event){
    console.log(this.cardNumberChild());
    const value = (event.target as HTMLInputElement).value;
    this.cardNumberChild.set(value);
  }
}
