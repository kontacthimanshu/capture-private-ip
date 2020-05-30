import { TestBed } from '@angular/core/testing';

import { CapturePrivateIpService } from './capture-private-ip.service';

describe('CapturePrivateIpService', () => {
  let service: CapturePrivateIpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapturePrivateIpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
