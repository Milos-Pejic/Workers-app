import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsDetailsComponent } from './flights-details/flights-details.component';
import { WorkersStartComponent } from './workers-start/workers-start.component';

const routes: Routes = [
  {
    path:':id',
    component:FlightsDetailsComponent,
  },
  {
    path:'',
    component:WorkersStartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
