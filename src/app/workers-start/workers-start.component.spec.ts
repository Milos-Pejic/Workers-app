import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkersStartComponent } from './workers-start.component';

describe('WorkersStartComponent', () => {
  let component: WorkersStartComponent;
  let fixture: ComponentFixture<WorkersStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkersStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkersStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
