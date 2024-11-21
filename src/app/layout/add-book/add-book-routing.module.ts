import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthGuard} from "../../auth/auth-guard.service";
import { AddBookComponent } from "./add-book.component";

const routes: Routes = [
  {
    path:"add-book",
    component : AddBookComponent,
    canActivate: [AuthGuard],
    data: {role: 'AUTHOR'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddBookRoutingModule{

}