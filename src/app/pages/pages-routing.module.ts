import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { MapsComponent } from 'src/app/pages/maps/maps.component';
import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
        {
        path: 'maps',
        component: MapsComponent,
        },
        {
          path: 'players',
          component: PlayersComponent,
        },
        {
          path: 'teams',
          component: TeamsComponent,
        }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
