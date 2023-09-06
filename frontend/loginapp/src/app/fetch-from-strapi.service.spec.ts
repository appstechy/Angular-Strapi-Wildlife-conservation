import { TestBed } from '@angular/core/testing';

import { FetchFromStrapiService } from './fetch-from-strapi.service';

describe('FetchFromStrapiService', () => {
  let service: FetchFromStrapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchFromStrapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
