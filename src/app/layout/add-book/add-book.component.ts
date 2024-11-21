import { Component } from '@angular/core';
import { DashboardService } from '../dashboard/dashboard.service';
import { AddBookService } from './add-book.service';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

function validateCoverImage(control: AbstractControl): { [key: string]: any } | null {
  const file = control.value;

  if (file) {
    const allowedExtensions = ['jpg', 'jpeg', 'png'];
    const fileName = file.split('\\').pop();
    const extension = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
    if (!allowedExtensions.includes(extension)) {
      return { invalidExtension: true };
    }
  }
  return null;
}

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent {

  message:string = "";
  submitted = false;
  bookForm!: FormGroup;
  selectedFile: File | null = null;
  isButtonDisabled = false;

  constructor(private dashboardService: DashboardService, private addBooksService: AddBookService, private router:Router) { }

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      coverImage: new FormControl('', [Validators.required, validateCoverImage])
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    this.submitted = true;
    if (this.bookForm.invalid) {
      return;
    }
    this.isButtonDisabled = true;
    
    const formData = new FormData();
    formData.append('title', this.bookForm.value.title);
    formData.append('description', this.bookForm.value.description);
    if (this.selectedFile) {
      formData.append('coverImage', this.selectedFile, this.selectedFile.name);
    }

    this.addBooksService.addBook(formData)
      .subscribe(
        (response) => {
          this.submitted = false;
          this.isButtonDisabled = false;
          this.bookForm.reset();
          this.selectedFile = null;
          this.router.navigate(['/author-books'])
        },
        (error) => {
          console.error('Failed to add book', error);
        }
      );

    }

  logout(){
    this.dashboardService.logout();
    localStorage.removeItem('om_session');
    localStorage.removeItem('om_data');
    this.router.navigateByUrl('/login');
  }

}
