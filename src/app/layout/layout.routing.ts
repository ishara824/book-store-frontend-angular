import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LayoutComponent} from "./layout.component";

const routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRouting {

}
