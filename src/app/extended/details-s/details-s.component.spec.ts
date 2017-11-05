import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSComponent } from './details-s.component';

describe('DetailsSComponent', () => {
  let component: DetailsSComponent;
  let fixture: ComponentFixture<DetailsSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
