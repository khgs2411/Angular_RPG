import { Injectable } from '@angular/core';
import { Player } from '../classes/characterClass';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  public character;

  constructor() { }

  createCharacter(val){
    this.character = new Player(val);
  }
}
