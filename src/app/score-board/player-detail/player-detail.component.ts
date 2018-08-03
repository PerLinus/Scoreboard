import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../shared/player.model.ts';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

@Input() player: Player;

  constructor() { }

  ngOnInit() {
  }

}
