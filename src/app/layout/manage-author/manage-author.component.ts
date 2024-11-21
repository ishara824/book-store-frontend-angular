import { Component } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { Router } from '@angular/router';
import { ManageAuthorService } from './manage-author.service';

@Component({
  selector: 'app-manage-author',
  templateUrl: './manage-author.component.html',
  styleUrls: ['./manage-author.component.css']
})
export class ManageAuthorComponent {

  authors: any;

  constructor(private dashboardService: DashboardService, private manageAuthorService: ManageAuthorService, private router:Router) { }

  ngOnInit(): void {
    this.getAllAuthors();
  }

  getAllAuthors(){
    this.manageAuthorService.getAllAuthors().subscribe((result) => {
      this.authors = result.data;
    })
  }

  activateAuthor(authorId: number){
    this.manageAuthorService.activateAuthor(authorId).subscribe((response) => {
      if (response.status === 200) {
        alert("User Activated!");
        this.getAllAuthors();
      }
    })
  }

  deactivateAuthor(authorId: number){
    this.manageAuthorService.deactivateAuthor(authorId).subscribe((response) => {
      if (response.status === 200) {
        alert("User Deactivated!");
        this.getAllAuthors();
      }
    })
  }

  logout(){
    this.dashboardService.logout();
    localStorage.removeItem('om_session');
    localStorage.removeItem('om_data');
    this.router.navigateByUrl('/login');
  }
}
