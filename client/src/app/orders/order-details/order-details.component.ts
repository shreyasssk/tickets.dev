import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../shared/auth.service';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  constructor(
    private route: ActivatedRoute,
    private authservice: AuthService,
    private router: Router,
    private payment: PaymentService
  ) {}

  ticketId;
  errors = [];
  orderDetails: any;
  orderId: any;

  ngOnInit(): void {
    this.fetchId();
    this.fetchOrder();
    this.fetchOrderId();
  }

  fetchId() {
    let id = this.route.snapshot.params['id'];
    this.ticketId = id;
    // console.log(id);
  }

  fetchOrderId() {
    let id = this.route.snapshot.params['id'];
    this.authservice
      .fetchTicket(environment.ordersURL + id)
      .subscribe((res) => {
        // console.log(res.id);
        this.orderId = res.id;
      });
  }

  timeInterval: any;
  fetchOrder() {
    let orderUrl = environment.ordersURL + this.ticketId;
    this.authservice
      .fetch(orderUrl)
      .toPromise()
      .then((res: any) => {
        this.orderDetails = res;
        // console.log(res);

        let x = setInterval(() => {
          var countDown = new Date(res.expiresAt).getTime();
          var now = new Date().getTime();
          var distance = countDown - now;
          var seconds = Math.round(distance / 1000);
          this.timeInterval = seconds + 's';
          if (distance < 0) {
            clearInterval(x);
            this.timeInterval = 'Expired';
          }
          setTimeout(() => {
            window.location.reload();
          }, 1000 * 60);
        });
      })
      .catch((err) => {
        const validationError = err.error.errors;
        this.errors = validationError;
        console.log(err);
      });
  }

  async onSubmit(data) {
    // console.log(data);
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    await this.payment.makePayment(data.price);
    await delay(20 * 1000);

    const paymentUrl = environment.paymentsURL;
    const token = 'tok_visa';
    const orderId = this.orderId;
    var paymentData = { token, orderId };
    await this.authservice
      .onSubmit(paymentUrl, paymentData)
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['']).then(() => {
          window.location.reload();
        });
      });
  }
}
