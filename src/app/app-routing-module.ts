import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentDetails } from './payment-details/payment-details';
import { PaymentDetailForm } from './payment-details/payment-detail-form/payment-detail-form';

const routes: Routes = [
  { path: '', redirectTo: 'PaymentDetails', pathMatch: 'full' },
  { path: 'PaymentDetails', component: PaymentDetails },
  { path: 'form', component: PaymentDetailForm },
  { path: '**', redirectTo: 'PaymentDetails', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
