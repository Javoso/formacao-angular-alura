import { TestBed } from '@angular/core/testing';

import { BodyInjectorsService } from './body-injector.service';

describe('BodyInjectorsService', () => {
  let service: BodyInjectorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodyInjectorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
