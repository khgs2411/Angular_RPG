export class Stats {
  public attack: number;
  public defence: number;
  public agility: number;
  public health: number;
  public $health: number;
  constructor() {
    this.initiateStats();
  }

  private initiateStats() {
    this.attack = Math.round(Math.random() * 6) + 1;
    this.defence = Math.round(Math.random() * 10) + 3;
    this.agility = Math.round(Math.random() * 3) + 1;
    this.health = this.attack * 10 + 100;
    this.$health = this.health;
  }
}
