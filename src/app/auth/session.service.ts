import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http:HttpClient) { }

  handle(data: any){
    this.set(data.access_token);
    this.setSession(data.user);
  }

  set(token: any){
    localStorage.setItem('om_session',token);
  }

  setSession(data: any){
    localStorage.setItem('om_data', JSON.stringify(data));
    //localStorage.setItem('om_data',JSON.stringify(data));
  }

  static encodeSessionData(data: any){
    return btoa(data);
  }

  get():any{
    return localStorage.getItem('om_session');
  }

  getSession(): any {
    const sessionData = localStorage.getItem('om_data');
    return sessionData ? JSON.parse(sessionData) : null;
  }

  payload(token: any){
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload: any){
    return JSON.parse(atob(payload));
  }

  isValid():boolean{
    const helper = new JwtHelperService();
    const token = this.get();
    //let response:any;
    if(token){
      const payload = this.payload(token);
      if(payload) {
        //console.log(payload);
        //return true;
        //return (payload.iss === `http://localhost:8000/api/auth/login` &&  !helper.isTokenExpired(token));
        return !helper.isTokenExpired(token);
      }
    }
    return false;
  }

  // getRefreshToken() {
  //   let headers = new HttpHeaders({
  //     'Authorization': 'Bearer '+this.get()
  //   });
  //
  //   let options = {headers: headers}
  //   return this.http.post("api/auth/refresh", null, options);
  // }
}
