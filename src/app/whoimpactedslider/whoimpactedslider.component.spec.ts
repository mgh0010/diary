import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoimpactedsliderComponent } from './whoimpactedslider.component';

describe('WhoimpactedsliderComponent', () => {
  let component: WhoimpactedsliderComponent;
  let fixture: ComponentFixture<WhoimpactedsliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhoimpactedsliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoimpactedsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
