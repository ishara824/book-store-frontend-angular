import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorDashboardRoutingModule } from './author-dashboard-routing.module';
import { AuthorDashboardComponent } from './author-dashboard.component';


@NgModule({
  declarations: [
    AuthorDashboardComponent
  ],
  imports: [
    // CommonModule,
    AuthorDashboardRoutingModule
  ]
})
export class AuthorDashboardModule { }
