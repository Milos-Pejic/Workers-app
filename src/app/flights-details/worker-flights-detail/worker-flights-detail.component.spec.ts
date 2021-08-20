import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerFlightsDetailComponent } from './worker-flights-detail.component';

describe('WorkerFlightsDetailComponent', () => {
  let component: WorkerFlightsDetailComponent;
  let fixture: ComponentFixture<WorkerFlightsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerFlightsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerFlightsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
