import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Flight } from '../../shared';
import { WorkersService } from '../../workers.service';

@Component({
  selector: 'app-worker-flights-detail',
  templateUrl: './worker-flights-detail.component.html',
  styleUrls: ['./worker-flights-detail.component.css'],
})
export class WorkerFlightsDetailComponent implements OnInit {
  workerId: number;
  flightsOfWorker: Flight[] = [];
  selectedFlight: Flight;
  selectedRow: Number;
  interval: any;
  constructor(
    private workersService: WorkersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.selectedRow = null;
      this.workerId = params['id'];
      this.getFlights();
      if(this.interval) clearInterval(this.interval);
      this.interval = setInterval(()=>{
        this.getFlights();
      }, 60000);
    });
  };
  onSelected(data: Flight, index:number){
    this.selectedFlight = data;
    this.workersService.selectedFlight.next(data);
    this.selectedRow = index;
  };
  getFlights():void{
    this.workersService.getFlight(this.workerId).subscribe((resp: Flight[]) => {
      this.flightsOfWorker = resp;
    });
  };
};
