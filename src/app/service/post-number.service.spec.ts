import { TestBed } from '@angular/core/testing';

import { PostNumberService } from './post-number.service';

describe('PostNumberService', () => {
  let service: PostNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
