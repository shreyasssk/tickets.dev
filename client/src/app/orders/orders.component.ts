import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  loadedData: any = [];

  constructor(private authservice: AuthService) {}

  ngOnInit(): void {
    this.fetchOrders();
  }
  ordersUrl = environment.ordersURL;

  fetchOrders() {
    this.authservice.fetchTicket(this.ordersUrl).subscribe((res) => {
      this.loadedData = res;
      // console.log(res);
    });
  }
}
