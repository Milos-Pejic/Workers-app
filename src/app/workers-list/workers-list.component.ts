import { Component, OnInit } from '@angular/core';
import { Worker } from '../shared';
import { WorkersService } from '../workers.service';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit {
  workers:Worker[]=[];
  constructor(private workersService: WorkersService) { };

  ngOnInit(): void {
    this.workersService.getWorkers().subscribe((resp:Worker[])=>{
      console.log(resp)
      this.workers=resp;
    });
  };
};
