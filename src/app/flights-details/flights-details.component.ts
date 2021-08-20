import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Flight } from '../shared';

@Component({
  selector: 'app-flights-details',
  templateUrl: './flights-details.component.html',
  styleUrls: ['./flights-details.component.css']
})
export class FlightsDetailsComponent implements OnInit {
  curentFlight:Flight;
  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.curentFlight=null;
    });
  };
}
