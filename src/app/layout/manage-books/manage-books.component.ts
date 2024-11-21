import { Component } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { ManageAuthorService } from '../manage-author/manage-author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent {

  books: any;

  constructor(private dashboardService: DashboardService, private manageAuthorService: ManageAuthorService, private router:Router) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks(){
    this.dashboardService.getAllBooks().subscribe((response) => {
      this.books = response.data;
    })
  }

  logout(){
    this.dashboardService.logout();
    localStorage.removeItem('om_session');
    localStorage.removeItem('om_data');
    this.router.navigateByUrl('/login');
  }
}
