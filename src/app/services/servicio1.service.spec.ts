import { TestBed } from '@angular/core/testing';

import { Servicio1Service } from './servicio1.service';

describe('Servicio1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Servicio1Service = TestBed.get(Servicio1Service);
    expect(service).toBeTruthy();
  });
});
