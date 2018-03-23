import { TestBed, inject } from '@angular/core/testing';

import { PersonaldecisionsService } from './personaldecisions.service';

describe('PersonaldecisionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonaldecisionsService]
    });
  });

  it('should be created', inject([PersonaldecisionsService], (service: PersonaldecisionsService) => {
    expect(service).toBeTruthy();
  }));
});
