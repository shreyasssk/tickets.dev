import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
})
export class NewComponent implements OnInit {
  @ViewChild('f') createTicketForm: NgForm;

  constructor(private authservice: AuthService, private router: Router) {}

  errors = [];
  ngOnInit(): void {}
  serverUrl = environment.ticketsURL;
  onSubmit(ticketData: { title: string; price: number }) {
    this.authservice.onSubmit(this.serverUrl, ticketData).subscribe(
      (responseData) => {
        console.log(responseData);
        this.router.navigate(['']).then(() => {
          window.location.reload();
        });
      },
      (err) => {
        const validationError = err.error.errors;
        // const x = validationError.map((message) => message.message);
        this.errors = validationError;
      }
    );
    this.createTicketForm.reset();
  }
}
