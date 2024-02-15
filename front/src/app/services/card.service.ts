import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}

  drawingCard(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/cartes/tirage`);
  }

}
