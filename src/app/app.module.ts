import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './angular-material/angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { MapsComponent } from './pages/maps/maps.component';
import { PlayersComponent } from './pages/players/players.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { TournamentsComponent } from './pages/tournaments/tournaments.component';
import { WeaponsComponent } from './pages/weapons/weapons.component';

@NgModule({
  declarations: [
    AppComponent,
    WeaponsComponent,
    MapsComponent,
    PlayersComponent,
    TeamsComponent,
    TournamentsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModuleModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
