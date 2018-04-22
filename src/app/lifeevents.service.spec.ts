import { TestBed, inject } from '@angular/core/testing';

import { LifeeventsService } from './lifeevents.service';

describe('LifeeventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LifeeventsService]
    });
  });

  it('should be created', inject([LifeeventsService], (service: LifeeventsService) => {
    expect(service).toBeTruthy();
  }));
});
