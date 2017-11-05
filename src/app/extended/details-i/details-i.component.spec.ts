import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsIComponent } from './details-i.component';

describe('DetailsIComponent', () => {
  let component: DetailsIComponent;
  let fixture: ComponentFixture<DetailsIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
