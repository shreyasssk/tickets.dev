import { Component, OnInit } from '@angular/core';
import { User } from './userData';
import { pluck } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loadedData: User[] = [];
  loadedTicket = [];

  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.fetchUser();
    this.fetchData();
  }

  userUrl = environment.authURL.currentUser;
  ticketsUrl = environment.ticketsURL;
  fetchUser() {
    this.authservice
      .fetch(this.userUrl)
      .pipe(pluck('currentUser'))
      .subscribe((res: User[]) => {
        this.loadedData = res;
        // console.log(this.loadedData);
      });
  }

  fetchData() {
    this.authservice.fetch(this.ticketsUrl).subscribe((res) => {
      this.loadedTicket = res;
      // console.log(res);
    });
  }

  onClick(ticketId: number) {
    this.router.navigate(['/tickets', ticketId]);
  }
}
