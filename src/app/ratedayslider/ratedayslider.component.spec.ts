import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatedaysliderComponent } from './ratedayslider.component';

describe('RatedaysliderComponent', () => {
  let component: RatedaysliderComponent;
  let fixture: ComponentFixture<RatedaysliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatedaysliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatedaysliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
