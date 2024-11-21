import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  getAllBooks():Observable<any>{
    return this.http.get("api/books");
  }

  searchBooks(keyword: string):Observable<any>{
    return this.http.get(`api/search-books?keyword=${keyword}`);
  }
  
}
