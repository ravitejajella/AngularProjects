import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing-module';
import { ModsHome } from './mods-home/mods-home';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ModsRoutingModule,
    ModsHome
  ],
  exports:[ModsHome]
})
export class ModsModule { }
