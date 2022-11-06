import { TestBed } from '@angular/core/testing';

import { CofeeService } from './cofee.service';

describe('CofeeServiceService', () => {
  let service: CofeeService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = TestBed.inject(CofeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
