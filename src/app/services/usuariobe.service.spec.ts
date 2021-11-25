import { TestBed } from '@angular/core/testing';

import { UsuariobeService } from './usuariobe.service';

describe('UsuariobeService', () => {
  let service: UsuariobeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariobeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
