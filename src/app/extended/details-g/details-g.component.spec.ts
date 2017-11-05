import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsGComponent } from './details-g.component';

describe('DetailsGComponent', () => {
  let component: DetailsGComponent;
  let fixture: ComponentFixture<DetailsGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
