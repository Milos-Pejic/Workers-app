import { Component, Input, OnInit } from '@angular/core'
import { Flight } from '../../shared';



@Component({
  selector: 'app-flight-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent implements OnInit {
  @Input() flight:Flight
  ;
  constructor() { }

  ngOnInit(): void {
  }
 }
