import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Player } from './player.model';

@Injectable()
export class ScoreBoardService {

  private newPlayer = new BehaviorSubject();
  testPlayer = this.newPlayer.asObservalbe();

  constructor() { }

  changePlayer(player: Player) {
    this.newPlayer.next(player);
  }

}
