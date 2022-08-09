import { TestBed } from '@angular/core/testing';

import { DatapaquetService } from './datapaquet.service';

describe('DatapaquetService', () => {
  let service: DatapaquetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatapaquetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
