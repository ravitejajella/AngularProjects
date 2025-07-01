import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionHome } from './collection-home/collection-home';
import { Companies } from './companies/companies';
import { Biography } from './biography/biography';
import { Partners } from './partners/partners';

const routes: Routes = [{
  path:'', component:CollectionHome,
children: [
{
  path:'', component:Biography
},
{
  path:'companies', component:Companies
},
{
  path:'partners', component:Partners
}
]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes),CollectionHome],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
