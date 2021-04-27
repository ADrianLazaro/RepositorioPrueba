import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { PlayersRoutingModule } from './players-routing.module';
import { MaterialModuleModule } from 'src/app/angular-material/angular-material.module';

@NgModule({
  declarations: [PlayersComponent],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    MaterialModuleModule
    ],
})
export class PlayersModule {}
