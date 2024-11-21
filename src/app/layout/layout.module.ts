import { NgModule } from '@angular/core';
import {DashboardModule} from "./dashboard/dashboard.module";
import {LayoutComponent} from "./layout.component";
import {LayoutRouting} from "./layout.routing";
import { AuthorDashboardComponent } from './author-dashboard/author-dashboard.component';
import { AuthorDashboardModule } from './author-dashboard/author-dashboard.module';
import { ManageAuthorComponent } from './manage-author/manage-author.component';
import { ManageAuthorModule } from './manage-author/manage-author.module';
import { ManageBooksComponent } from './manage-books/manage-books.component';
import { ManageBooksModule } from './manage-books/manage-books.module';
import { AuthorBooksComponent } from './author-books/author-books.component';
import { AuthorBooksModule } from './author-books/author-books.module';
import { AddBookComponent } from './add-book/add-book.component';
import { AddBookModule } from './add-book/add-book.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    DashboardModule,
    AuthorDashboardModule,
    ManageAuthorModule,
    ManageBooksModule,
    AuthorBooksModule,
    AddBookModule,
    LayoutRouting
  ],
})
export class LayoutModule { }
