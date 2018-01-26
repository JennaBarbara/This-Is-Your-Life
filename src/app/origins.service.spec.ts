import { TestBed, inject } from '@angular/core/testing';

import { OriginsService } from './origins.service';

describe('OriginsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OriginsService]
    });
  });

  it('should be created', inject([OriginsService], (service: OriginsService) => {
    expect(service).toBeTruthy();
  }));
});
