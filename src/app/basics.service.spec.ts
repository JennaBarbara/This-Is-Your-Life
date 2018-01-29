import { TestBed, inject } from '@angular/core/testing';

import { BasicsService } from './basics.service';

describe('BasicsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BasicsService]
    });
  });

  it('should be created', inject([BasicsService], (service: BasicsService) => {
    expect(service).toBeTruthy();
  }));
});
