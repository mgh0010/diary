import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostimportantthingsliderComponent } from './mostimportantthingslider.component';

describe('MostimportantthingsliderComponent', () => {
  let component: MostimportantthingsliderComponent;
  let fixture: ComponentFixture<MostimportantthingsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostimportantthingsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostimportantthingsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
