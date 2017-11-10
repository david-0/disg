import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteInput2Component } from './vote-input2.component';

describe('VoteInput2Component', () => {
  let component: VoteInput2Component;
  let fixture: ComponentFixture<VoteInput2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteInput2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteInput2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
