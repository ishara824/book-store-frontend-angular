import { TestBed } from '@angular/core/testing';

import { ManageAuthorService } from './manage-author.service';

describe('ManageAuthorService', () => {
  let service: ManageAuthorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageAuthorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
