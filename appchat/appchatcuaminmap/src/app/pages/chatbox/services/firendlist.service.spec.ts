import { TestBed } from '@angular/core/testing';

import { FirendlistService } from './firendlist.service';

describe('FirendlistService', () => {
  let service: FirendlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirendlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
