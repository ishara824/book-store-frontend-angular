import { TestBed } from '@angular/core/testing';

import { AuthorBooksService } from './author-books.service';

describe('AuthorBooksService', () => {
  let service: AuthorBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
