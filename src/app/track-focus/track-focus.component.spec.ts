import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackFocusComponent } from './track-focus.component';

describe('TrackFocusComponent', () => {
  let component: TrackFocusComponent;
  let fixture: ComponentFixture<TrackFocusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackFocusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackFocusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
