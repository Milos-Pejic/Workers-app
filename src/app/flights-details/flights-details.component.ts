import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Flight } from '../shared';
import { WorkersService } from '../workers.service';

@Component({
  selector: 'app-flights-details',
  templateUrl: './flights-details.component.html',
  styleUrls: ['./flights-details.component.css']
})
export class FlightsDetailsComponent implements OnInit, OnDestroy {
  curentFlight: Flight;
  subscritpionFlight: Subscription;

  constructor( private activatedRoute: ActivatedRoute,
    private workersService:WorkersService
    ) { }

  ngOnInit(): void {
    this.subscritpionFlight = this.workersService.selectedFlight.subscribe((resp:Flight)=>{
      this.curentFlight = resp;
    });
    this.activatedRoute.params.subscribe((params: Params) => {
      this.curentFlight = null;
    });
  };
  ngOnDestroy(): void {
      this.subscritpionFlight.unsubscribe();
  };
}
