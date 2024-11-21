import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthGuard} from "../../auth/auth-guard.service";
import { ManageAuthorComponent } from "./manage-author.component";

const routes: Routes = [
  {
    path:"manage-authors",
    component : ManageAuthorComponent,
    canActivate: [AuthGuard],
    data: {role: 'ADMIN'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageAuthorRoutingModule{

}