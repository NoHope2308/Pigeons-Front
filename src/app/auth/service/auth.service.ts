import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { AuthResponse, User } from '../interfaces/auth-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _user!: User;

  get user() {
    return { ...this._user };
  }

  constructor( private http: HttpClient) { }

  register( name: string, email: string, password: string, phone: number ) {

    const url = `${ this.baseUrl }/auth/new`;
    const body = { name, email, password, phone };
    console.log(body)
    return this.http.post<AuthResponse>( url, body)
    .pipe(
      tap(res => {
        console.log(res)
        if (res.ok) {
          localStorage.setItem('token', res.token!);
          this._user = {
            name: res.name!,
            uid: res.uid!,
            phone: res.phone!
          }
        }
      }),
      map( res => res.ok),
      catchError( err => of(err.error.msg))
    );
  }

  login (email: string , password: string) {

    const url = `${ this.baseUrl }/auth`;
    const body = {email, password};

    return this.http.post<AuthResponse>( url, body )
    .pipe(
      tap(res => {
        console.log(res)
        if (res.ok) {
          localStorage.setItem('token', res.token!);
          this._user = {
            name: res.name!,
            uid: res.uid!,
            phone: res.phone!
          }
        }
      }),
      map( res => res.ok),
      catchError( err => of(err.error.msg))
    );
  }

  validateToken(): Observable<boolean> {

    const url = `${ this.baseUrl }/auth/renew`;
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders()
    .set('x-token', token || "");

    return this.http.get<AuthResponse>( url, { headers } )
    .pipe(
      map( res => {
        if (res.ok) {
          localStorage.setItem('token', res.token!);
          this._user = {
            name: res.name!,
            uid: res.uid!,
            phone: res.phone!
          }
        }

        return res.ok;
      }),
      catchError( err => of(false))
    );
  }

  logOut() {
    localStorage.clear();
  }
}
