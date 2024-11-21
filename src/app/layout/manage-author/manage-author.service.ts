import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageAuthorService {

  constructor(private http:HttpClient) { }

  getAllAuthors():Observable<any>{
    return this.http.get("api/authors");
  }

  activateAuthor(authorId: number):Observable<any>{
    return this.http.post("api/activate-author", {author_id: authorId}, { observe: 'response' })
  }

  deactivateAuthor(authorId: number):Observable<any>{
    return this.http.post("api/deactivate-author", {author_id: authorId}, { observe: 'response' })
  }
}
