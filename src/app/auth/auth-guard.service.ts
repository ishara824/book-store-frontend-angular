import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {SessionService} from "./session.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private sessionService: SessionService,private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.sessionService.isValid()) {
      let token = this.sessionService.get();
      let dcodePayload = this.sessionService.payload(token);
      let user = this.sessionService.getSession();
      
      console.log(user.role);
      if (route.data['role'] && user.role !== route.data['role']) {
        console.log("unauth");
        // Redirect to 403 unauthorized page
        //this.router.navigateByUrl("/unauth");
        return false;
      }

      //console.log(dcodePayload['roles']);
      return true;
    } else {

      this.router.navigateByUrl("/login");
    }
    return false;
  }
}
