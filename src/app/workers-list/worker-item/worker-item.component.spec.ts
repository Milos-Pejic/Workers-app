import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerItemComponent } from './worker-item.component';

describe('WorkerItemComponent', () => {
  let component: WorkerItemComponent;
  let fixture: ComponentFixture<WorkerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkerItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
