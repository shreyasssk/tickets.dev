import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor() {}

  handler;
  paymentHandler: any = null;
  token: any;

  ngOnInit(): void {
    this.invokeStripe();
  }

  makePayment(price: number) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: environment.stripe_key,

      locale: 'auto',
      token: (stripeToken: any) => {
        console.log(stripeToken.card.id);
        this.token = stripeToken.card.id;
      },
    });

    paymentHandler.open({
      name: 'Tickets.dev',
      currency: 'inr',
      amount: price * 100,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://js.stripe.com/v3/';
      window.document.body.appendChild(script);
    }
  }
}
