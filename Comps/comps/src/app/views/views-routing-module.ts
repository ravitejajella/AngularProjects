import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewsHome } from './views-home/views-home';
const routes: Routes = [{
  path:'', component:ViewsHome
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
