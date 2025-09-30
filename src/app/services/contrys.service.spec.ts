import { TestBed } from '@angular/core/testing';

import { ContrysService } from './contrys.service';

describe('ContrysService', () => {
  let service: ContrysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContrysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
