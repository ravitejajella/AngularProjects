import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModsHome } from './mods-home/mods-home';

const routes: Routes = [
  {
    path:'', component: ModsHome
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ModsHome],
  exports: [RouterModule]
})
export class ModsRoutingModule { }
