import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/auth/session.service';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {

  private formHeaders: HttpHeaders;
  constructor(private http:HttpClient, private sessionService: SessionService) { 
    this.formHeaders = new HttpHeaders({
      'Authorization': `Bearer ${this.sessionService.get()}`,
    });
  }

  addBook(formData: FormData):Observable<any>{
    return this.http.post("api/books", formData, {headers: this.formHeaders});
  }
}
