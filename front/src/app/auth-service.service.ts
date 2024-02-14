import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  login1(credentials: any): Observable<any> {
    return this.http.post<any>(`localhost:8080/api/users/login`, credentials);
  }

  login(username: string, password: string): Observable<any> {
    const credentials ={ username, password };
    return this.http.post<any>(`${this.apiUrl}/users/login`,credentials);
  }
}
