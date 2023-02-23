import { TestBed } from '@angular/core/testing';

import { MantenimientoAuthGuard } from './mantenimiento-auth.guard';

describe('MantenimientoAuthGuard', () => {
  let guard: MantenimientoAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MantenimientoAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
