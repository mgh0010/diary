import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksliderComponent } from './workslider.component';

describe('WorksliderComponent', () => {
  let component: WorksliderComponent;
  let fixture: ComponentFixture<WorksliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
