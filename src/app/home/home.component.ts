import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  books: any;
  keyword: string = "";

  constructor(private homeService: HomeService, private router:Router) { }

  ngOnInit(): void {
    this.homeService.getAllBooks().subscribe((result) => {
      this.books = result.data;
    })
  }

  searchBooks() {
    this.homeService.searchBooks(this.keyword).subscribe((response) => {
      this.books = response.data
    },
    (error) => {
      console.error(error);
    });
  }

}
