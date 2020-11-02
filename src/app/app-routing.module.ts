import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TravelInfoComponent} from './components/travel-info/travel-info.component';
import {AboutComponent} from './components/about/about.component'
const routes: Routes = [
  {path:'travel-info',component:TravelInfoComponent},
  {path:'about',component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[TravelInfoComponent,AboutComponent];
