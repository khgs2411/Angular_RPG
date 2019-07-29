import { Injectable } from "@angular/core";
import { Player } from "../classes/characterClass";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class PlayerService {
  public load: boolean;
  public player = new Player();
  constructor(private cookie: CookieService) {}

  createCharacter(val) {
    this.player.character = this.player.create(val);
    this.saveCharacter();
    return this.player.character;
  }

  initiateCharacter() {
    this.player.character = this.player.initiate();
    return this.player.character;
  }

  saveCharacter() {
    this.cookie.set("Player", JSON.stringify(this.player.character));
  }

  deleteSaveFile() {
    this.cookie.delete("Player");
    this.load = false;
  }

  loadSaveFile() {
    const temp = this.cookie.get("Player");
    if (temp) {
      this.player.character = JSON.parse(temp);
      console.log("SAVE LOADED - Character:", this.player.character);
      this.load = true;
    } else {
      this.initiateCharacter();
      console.log("NO SAVE FILE");
    }
    return this.load;
  }
}
