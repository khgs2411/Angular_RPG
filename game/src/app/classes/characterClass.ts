import { Character } from "../interfaces/character";
import { Stats } from "../classes/statsClass";

export class Player {
  public character: Character;
  constructor() {}

  public create(val) {
    this.character.name = val.name;
    this.character.lvl = 1;
    return this.character;
  }

  public initiate() {
    this.character = {
      name: "",
      title: "",
      lvl: 0,
      stats: new Stats()
    };
    return this.character;
  }
}
