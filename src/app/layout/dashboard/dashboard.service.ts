import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  getAllAuthors():Observable<any>{
    return this.http.get("api/authors");
  }

  getAllBooks():Observable<any>{
    return this.http.get("api/books");
  }

  logout():Observable<any>{
    return this.http.post("api/logout", null);
  }
}
