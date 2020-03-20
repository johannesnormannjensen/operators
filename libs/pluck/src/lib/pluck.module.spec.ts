import { async, TestBed } from '@angular/core/testing';
import { PluckModule } from './pluck.module';

describe('PluckModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PluckModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PluckModule).toBeDefined();
  });
});
