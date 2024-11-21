import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthGuard} from "../../auth/auth-guard.service";
import { AuthorBooksComponent } from "./author-books.component";

const routes: Routes = [
  {
    path:"author-books",
    component : AuthorBooksComponent,
    canActivate: [AuthGuard],
    data: {role: 'AUTHOR'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorBooksRoutingModule{

}