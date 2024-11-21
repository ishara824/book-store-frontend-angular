import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorBooksService {

  constructor(private http:HttpClient) { }

  getBooksByAuthor():Observable<any>{
    return this.http.get("api/get-books-by-author");
  }
}
