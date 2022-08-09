import { TestBed } from '@angular/core/testing';

import { DatagestionnaireService } from './datagestionnaire.service';

describe('DatagestionnaireService', () => {
  let service: DatagestionnaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatagestionnaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
