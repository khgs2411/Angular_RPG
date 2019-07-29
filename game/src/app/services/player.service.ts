import { Injectable } from "@angular/core";
import { Player } from "../classes/characterClass";
import { Character } from "../interfaces/character";

@Injectable({
  providedIn: "root"
})
export class PlayerService {
  public player = new Player();
  constructor() {}

  createCharacter(val) {
    this.player.character = this.player.create(val);
    return this.player.character;
  }

  initiateCharacter() {
    this.player.character = this.player.initiate();
    return this.player.character;
  }
}
