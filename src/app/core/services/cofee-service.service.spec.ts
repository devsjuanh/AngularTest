import { TestBed } from '@angular/core/testing';

import { CofeeServiceService } from './cofee-service.service';

describe('CofeeServiceService', () => {
  let service: CofeeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CofeeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
