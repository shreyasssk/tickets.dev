import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  ticketId;
  ticketData: any;
  constructor(
    private route: ActivatedRoute,
    private authservice: AuthService,
    private router: Router
  ) {}

  errors = [];
  orderUrl = environment.ordersURL;

  ngOnInit(): void {
    this.fetchId();
    this.fetchData();
  }

  fetchId() {
    let id = this.route.snapshot.params['id'];
    this.ticketId = id;
    // console.log(id);
  }

  fetchData() {
    let ticketUrl = environment.ticketsURL + this.ticketId;
    this.authservice
      .fetchTicket(ticketUrl)
      .toPromise()
      .then((data: any) => {
        this.ticketData = data;
        // console.log(data);
      });
  }

  onSubmit(orderData: { ticketId: string }) {
    this.authservice
      .onSubmit(this.orderUrl, orderData)
      .toPromise()
      .then((data: any) => {
        // console.log(data);
        const orderDetails = data.body.id;
        this.router.navigate(['/orders', orderDetails]);
      })
      .catch((err) => {
        const validationError = err.error.errors;
        this.errors = validationError;
        console.log(err);
      });
  }

  onClick() {}
}
