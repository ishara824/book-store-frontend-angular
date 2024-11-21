import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AuthGuard} from "../../auth/auth-guard.service";
import { ManageBooksComponent } from "./manage-books.component";

const routes: Routes = [
  {
    path:"manage-books",
    component : ManageBooksComponent,
    canActivate: [AuthGuard],
    data: {role: 'ADMIN'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageBooksRoutingModule{

}