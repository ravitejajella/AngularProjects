import { Routes } from '@angular/router';
import { ElementsModule } from './elements/elements-module';
import { ElementsHome } from './elements/elements-home/elements-home';
import { ViewsHome } from './views/views-home/views-home';
import { CollectionHome } from './collections/collection-home/collection-home';
import { ModsHome } from './mods/mods-home/mods-home';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  {
    path: 'elements',
    loadChildren: () =>
      import('./elements/elements-module').then((m) => m.ElementsModule),
  },
  {
    path: 'views',
    loadChildren :() =>
      import('./views/views-module').then((m)=>m.ViewsModule),
  },
  {
    path: 'collections',
    loadChildren:()=>
      import('./collections/collections-module').then((m)=>m.CollectionsModule)
  },
  {
    path: 'mods',
        loadChildren:()=>
      import('./mods/mods-module').then((m)=>m.ModsModule)
  },
  {
    path: '',
    component: Home,
  },
  {
    path: '**',
    component: NotFound,
  },
];
