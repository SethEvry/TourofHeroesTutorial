import { TestBed } from '@angular/core/testing';

import { IneMemoryDataService } from './ine-memory-data.service';

describe('IneMemoryDataService', () => {
  let service: IneMemoryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IneMemoryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
