import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  authors: any;

  constructor(private dashboardService: DashboardService, private router:Router) { }

  // ngOnInit(): void {
  //   this.dashboardService.getAllAuthors().subscribe((result) => {
  //     this.authors = result.data;
  //   })
  // }

  logout(){
      this.dashboardService.logout();
      localStorage.removeItem('om_session');
      localStorage.removeItem('om_data');
      this.router.navigateByUrl('/login');
  }

}
