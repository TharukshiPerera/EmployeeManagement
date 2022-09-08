import { TestBed } from '@angular/core/testing';

import { EmpleaveService } from './empleave.service';

describe('EmpleaveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpleaveService = TestBed.get(EmpleaveService);
    expect(service).toBeTruthy();
  });
});
