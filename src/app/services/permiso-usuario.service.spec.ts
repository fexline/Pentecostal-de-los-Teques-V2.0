import { TestBed } from '@angular/core/testing';

import { PermisoUsuarioService } from './permiso-usuario.service';

describe('PermisoUsuarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PermisoUsuarioService = TestBed.get(PermisoUsuarioService);
    expect(service).toBeTruthy();
  });
});
