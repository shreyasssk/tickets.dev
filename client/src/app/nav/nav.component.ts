import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { pluck } from 'rxjs/operators';
import { User } from '../home/userData';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  loadedData: User[] = [];

  constructor(private authservice: AuthService, private router: Router) {}

  currentUserUrl = environment.authURL.currentUser;
  signOutUrl = environment.authURL.signout;

  ngOnInit(): void {
    this.authservice
      .fetch(this.currentUserUrl)
      .pipe(pluck('currentUser'))
      .subscribe((res: User[]) => {
        this.loadedData = res;
        // console.log(this.loadedData);
      });
  }

  onSubmit() {
    this.authservice.onSubmit(this.signOutUrl, null).subscribe((res) => {
      this.router.navigate(['']).then(() => {
        window.location.reload();
      });
    });
  }
}
