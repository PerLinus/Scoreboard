import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreBoardRoutingModule } from './score-board-routing.module';
import { FormsModule } from '@angular/forms';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { ScoreBoardComponent } from './score-board.component';
import { ScoreBoardService } from './shared/score-board.service';

@NgModule({
  imports:
  [
    CommonModule,
    FormsModule,
    ScoreBoardRoutingModule
  ],
  declarations:
  [
    PlayerListComponent,
    PlayerDetailComponent,
    ScoreBoardComponent
  ],
  providers:
  [
    ScoreBoardService
  ]
})
export class ScoreBoardModule { }
