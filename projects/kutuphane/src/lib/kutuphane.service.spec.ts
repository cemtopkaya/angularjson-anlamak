import { TestBed } from '@angular/core/testing';

import { KutuphaneService } from './kutuphane.service';

describe('KutuphaneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KutuphaneService = TestBed.get(KutuphaneService);
    expect(service).toBeTruthy();
  });
});
