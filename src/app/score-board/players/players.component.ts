import { Component, OnInit } from '@angular/core';
import { Player } from './player';
import { PLAYERS } from './mock-players';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players = PLAYERS;

  selectedPlayer: Player;

  constructor() { }

  ngOnInit() {
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

}