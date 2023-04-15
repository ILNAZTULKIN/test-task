import { TestBed } from '@angular/core/testing';

import { NewsapiserverService } from './newsapiserver.service';

describe('NewsapiserverService', () => {
  let service: NewsapiserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsapiserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
