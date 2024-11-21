import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageBooksComponent } from './manage-books.component';
import { ManageBooksRoutingModule } from './manage-books.routing.module';



@NgModule({
  declarations: [
    ManageBooksComponent
  ],
  imports: [
    CommonModule,
    ManageBooksRoutingModule
  ]
})
export class ManageBooksModule { }
