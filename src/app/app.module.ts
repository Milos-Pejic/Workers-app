import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { FlightsDetailsComponent } from './flights-details/flights-details.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkerItemComponent } from './workers-list/worker-item/worker-item.component';
import { WorkerFlightsDetailComponent } from './flights-details/worker-flights-detail/worker-flights-detail.component';
import { FlightDetailComponent } from './flights-details/flight-detail/flight-detail.component';
import { MinutesToHoursPipe } from './pipe/minutes-to-hours.pipe';
import { WorkersStartComponent } from './workers-start/workers-start.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkersListComponent,
    FlightsDetailsComponent,
    WorkerItemComponent,
    WorkerFlightsDetailComponent,
    FlightDetailComponent,
    MinutesToHoursPipe,
    WorkersStartComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
