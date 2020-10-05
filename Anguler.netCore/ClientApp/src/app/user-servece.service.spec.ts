import { TestBed, inject } from '@angular/core/testing';

import { UserServeceService } from './user-servece.service';

describe('UserServeceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserServeceService]
    });
  });

  it('should be created', inject([UserServeceService], (service: UserServeceService) => {
    expect(service).toBeTruthy();
  }));
});
