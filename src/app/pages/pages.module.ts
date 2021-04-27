import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModuleModule } from 'src/app/angular-material/angular-material.module';
import { MapsComponent } from './maps/maps.component'
@NgModule({
  declarations: [ PagesComponent ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModuleModule
    ],
})
export class PagesModule {}
