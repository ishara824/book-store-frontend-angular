import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorBooksComponent } from './author-books.component';
import { AuthorBooksRoutingModule } from './author-books.routing.module';



@NgModule({
  declarations: [
    AuthorBooksComponent
  ],
  imports: [
    CommonModule,
    AuthorBooksRoutingModule
  ]
})
export class AuthorBooksModule { }
