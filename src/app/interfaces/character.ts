export interface Character {
  name: string;
  title: string;
  lvl: number;
  stats: Stats;
}

export interface Stats {
  attack: number;
  defence: number;
  agility: number;
  health: number;
  $health: number;
}
