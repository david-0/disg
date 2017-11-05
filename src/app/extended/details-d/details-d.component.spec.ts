import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDComponent } from './details-d.component';

describe('DetailsDComponent', () => {
  let component: DetailsDComponent;
  let fixture: ComponentFixture<DetailsDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
