import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteOutputComponent } from './vote-output.component';

describe('VoteOutputComponent', () => {
  let component: VoteOutputComponent;
  let fixture: ComponentFixture<VoteOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
