import { Component, OnInit } from '@angular/core';
import { Player } from '../shared/player.model';
import { PLAYERS } '../shared/mock-players';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  players = PLAYERS;

  selectedPlayer: Player;

  constructor() { }

  ngOnInit() {
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

}
