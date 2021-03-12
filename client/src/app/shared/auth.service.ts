import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../home/userData';
import { TicketData } from '../tickets/details/ticketData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  fetch(serverUrl: string): Observable<User[]> {
    return this.http.get<User[]>(serverUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Allow-Origin-With-Credentials': '*',
      }),
      withCredentials: true,
    });
  }

  fetchTicket(serverUrl: string): Observable<TicketData> {
    return this.http.get<TicketData>(serverUrl, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Allow-Origin-With-Credentials': '*',
      }),
      withCredentials: true,
    });
  }

  onSubmit(serverUrl: string, userData) {
    return this.http.post(serverUrl, userData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Allow-Origin-With-Credentials': '*',
      }),
      observe: 'response',
      withCredentials: true,
    });
  }
}
