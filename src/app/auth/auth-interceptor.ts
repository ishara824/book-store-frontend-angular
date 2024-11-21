import { SessionService } from "./session.service";
import {Injectable} from "@angular/core";
import {HttpHandler, HttpRequest} from "@angular/common/http";

@Injectable()
export class AuthInterceptor {

  constructor(private auth: SessionService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.auth.get();

    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer '+authToken)
    })

    return next.handle(authReq);
  }
}
