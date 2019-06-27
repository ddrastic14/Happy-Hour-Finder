import { TestBed, inject } from '@angular/core/testing';

import { HappyHourService } from './happy-hour.service';

describe('HappyHourService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HappyHourService]
    });
  });

  it('should be created', inject([HappyHourService], (service: HappyHourService) => {
    expect(service).toBeTruthy();
  }));
});
