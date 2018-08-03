import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players/players.component';
import { ScoreBoardRoutingModule } from './score-board-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:
  [
    CommonModule,
    FormsModule,
    ScoreBoardRoutingModule
  ],
  declarations:
  [
    PlayersComponent
  ]
})
export class ScoreBoardModule { }
