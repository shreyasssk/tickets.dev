import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;

  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit(): void {}

  errors = [];
  serverUrl = environment.authURL.sign;
  onSubmit(emailData: { email: string; password: string }) {
    this.authservice.onSubmit(this.serverUrl, emailData).subscribe(
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
    this.signupForm.reset();
  }
}
