import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsDetailsComponent } from './flights-details/flights-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WorkersStartComponent } from './workers-start/workers-start.component';

const routes: Routes = [
  { path: '', redirectTo: '/workers', pathMatch: 'full' },
  { path: 'workers/:id', component: FlightsDetailsComponent },
  { path: 'workers', component: WorkersStartComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
