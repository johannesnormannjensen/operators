import { async, TestBed } from '@angular/core/testing';
import { CreatorsIntervalModule } from './creators-interval.module';

describe('CreatorsIntervalModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CreatorsIntervalModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CreatorsIntervalModule).toBeDefined();
  });
});
