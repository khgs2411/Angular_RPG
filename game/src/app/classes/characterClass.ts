import { Character } from "../interfaces/character";

export class Stats {
  public attack: number;
  public defence: number;
  public agility: number;
  public health: number;
  public $health: number;
  constructor(val) {
    this.initiateStats(val);
  }
  initiateStats(val) {
    this.attack = val.attack;
    this.defence = val.defence;
    this.agility = val.agility;
    this.health = val.health;
    this.$health = val.health;
  }

  public test() {
    console.log("test");
  }
}

export class Player {
  public character: Character;
  constructor(val) {
    // this.create(val);
  }

  create(val, save?) {
    this.character.stats = new Stats(val);
    this.character.name = val.name;
  }
}
