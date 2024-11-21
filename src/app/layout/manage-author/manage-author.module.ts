import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageAuthorComponent } from './manage-author.component';
import { ManageAuthorRoutingModule } from './manage-author.routing.module';



@NgModule({
  declarations: [
    ManageAuthorComponent
  ],
  imports: [
    CommonModule,
    ManageAuthorRoutingModule
  ]
})
export class ManageAuthorModule { }
