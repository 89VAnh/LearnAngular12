import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpServerService {
  private REST_API_SERVER = 'http://localhost:3000';
  private REST_RANDOM_API_SERVER = 'https://randomuser.me/api';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getComments(): Observable<any> {
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
  postComment(payload: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/comments`;
    return this.httpClient.post<any>(url, payload, this.httpOptions);
  }
  deleteComment(id: number): Observable<any> {
    const url = `${this.REST_API_SERVER}/comments/${id}`;
    return this.httpClient.delete<any>(url, this.httpOptions);
  }
  updateComment(payload: any): Observable<any> {
    const url = `${this.REST_API_SERVER}/comments/${payload.id}`;
    return this.httpClient.put<any>(url, payload, this.httpOptions);
  }

  getRandomUser(users: number = 1): Observable<any> {
    const url = `${this.REST_RANDOM_API_SERVER}/?results=${users}`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
}
