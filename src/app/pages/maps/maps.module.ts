import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsComponent } from './maps.component';
import { MapsRoutingModule } from './maps-routing.module';
import { MaterialModuleModule } from 'src/app/angular-material/angular-material.module';

@NgModule({
  declarations: [ MapsComponent ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    MaterialModuleModule
    ],
})
export class MapsModule {}
