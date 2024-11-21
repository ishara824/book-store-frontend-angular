import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBookComponent } from './add-book.component';
import { AddBookRoutingModule } from './add-book-routing.module';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddBookComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddBookRoutingModule
  ]
})
export class AddBookModule { }
