import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import { baseUrl } from 'src/environments/environment';
import {Signup} from "./signup";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }

  signUp(signup: Signup):Observable<any>{
    return this.http.post(`${baseUrl}auth/register`,signup);
  }
}
