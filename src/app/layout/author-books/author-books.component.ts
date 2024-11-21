import { Component } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { AuthorBooksService } from './author-books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-books',
  templateUrl: './author-books.component.html',
  styleUrls: ['./author-books.component.css']
})
export class AuthorBooksComponent {

  books: any;

  constructor(private dashboardService: DashboardService, private authorBooksService: AuthorBooksService, private router:Router) { }

  ngOnInit(): void {
    this.getBooksByAuthor();
  }

  getBooksByAuthor(){
    this.authorBooksService.getBooksByAuthor().subscribe((result) => {
      this.books = result.data;
    })
  }

  logout(){
    this.dashboardService.logout();
    localStorage.removeItem('om_session');
    localStorage.removeItem('om_data');
    this.router.navigateByUrl('/login');
  }


}
