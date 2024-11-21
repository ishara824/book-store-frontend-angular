import { Component } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-dashboard',
  templateUrl: './author-dashboard.component.html',
  styleUrls: ['./author-dashboard.component.css']
})
export class AuthorDashboardComponent {

  constructor(private dashboardService: DashboardService, private router:Router) { }

  logout(){
    this.dashboardService.logout();
    localStorage.removeItem('om_session');
    localStorage.removeItem('om_data');
    this.router.navigateByUrl('/login');
  }

}
