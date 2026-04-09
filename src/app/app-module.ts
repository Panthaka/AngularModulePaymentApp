import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { PaymentDetails } from './payment-details/payment-details';
import { PaymentDetailForm } from './payment-details/payment-detail-form/payment-detail-form';

@NgModule({
  declarations: [App, PaymentDetails, PaymentDetailForm],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
