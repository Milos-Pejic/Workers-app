import { Component, Input, OnInit } from '@angular/core';
import { Worker } from '../../shared';


@Component({
  selector: 'app-worker-item',
  templateUrl: './worker-item.component.html',
  styleUrls: ['./worker-item.component.css']
})
export class WorkerItemComponent implements OnInit {
  @Input() worker: Worker;

  constructor() { }

  ngOnInit(): void {
  }

}
