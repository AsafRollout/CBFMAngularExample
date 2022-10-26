import { TestBed } from '@angular/core/testing';

import { FeatureMngService } from './feature-mng.service';

describe('FeatureMngService', () => {
  let service: FeatureMngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureMngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
