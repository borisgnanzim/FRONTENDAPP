import { TestBed } from '@angular/core/testing';

import { DatacolisService } from './datacolis.service';

describe('DatacolisService', () => {
  let service: DatacolisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatacolisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
