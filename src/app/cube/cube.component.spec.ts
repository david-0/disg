import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointComponent } from './cube.component';

describe('PointComponent', () => {
  let component: PointComponent;
  let fixture: ComponentFixture<PointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
