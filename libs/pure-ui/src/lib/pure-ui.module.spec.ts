import { async, TestBed } from '@angular/core/testing';
import { PureUiModule } from './pure-ui.module';

describe('PureUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PureUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PureUiModule).toBeDefined();
  });
});
