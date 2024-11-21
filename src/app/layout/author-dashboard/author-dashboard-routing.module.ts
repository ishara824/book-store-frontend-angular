import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDashboardComponent } from './author-dashboard.component';
import { AuthGuard } from 'src/app/auth/auth-guard.service';

const routes: Routes = [
  {
    path:"author-dashboard",
    component : AuthorDashboardComponent,
    canActivate: [AuthGuard],
    data: {role: 'AUTHOR'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorDashboardRoutingModule { }
