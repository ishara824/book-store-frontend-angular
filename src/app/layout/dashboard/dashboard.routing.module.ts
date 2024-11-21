import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {NgModule} from "@angular/core";
import {AuthGuard} from "../../auth/auth-guard.service";

const routes: Routes = [
  {
    path:"admin-dashboard",
    component : DashboardComponent,
    canActivate: [AuthGuard],
    data: {role: 'ADMIN'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule{

}
