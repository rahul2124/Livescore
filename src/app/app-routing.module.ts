import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CricketComponent } from './cricket/cricket.component';
import { ErrorComponent } from './error/error.component';
import { FootballComponent } from './football/football.component';
import { KabaadiComponent } from './kabaadi/kabaadi.component';

const routes: Routes = [
  {
    component:CricketComponent,
    path:'cricket'
  },
  {
    component:KabaadiComponent,
    path:'kabaadi'
  },
  {
    component:FootballComponent,
    path:'football'
  },
  {path:'error',component:ErrorComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
