import { Component, OnInit } from "@angular/core";
import { fade, expand } from "src/assets/animations/animations";
import { PlayerService } from "src/app/services/player.service";
import { ExploreService } from "src/app/services/explore.service";
import { Character } from "src/app/interfaces/character";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
  animations: [fade, expand]
})
export class CreateComponent implements OnInit {
  private phase: string;
  public player: Character;
  constructor(private service: PlayerService) {}

  ngOnInit() {
    this.initiateLocalVariables();
  }

  initiateLocalVariables() {
    this.phase = "create";
    this.player = this.service.initiateCharacter();
    this.devParams();
  }

  // createScreen(): boolean {
  //   switch (this.phase) {
  //     case "create":
  //       return true;
  //     case "creating":
  //       return false;
  //     case "done":
  //       return false;
  //   }
  // }

  devParams() {
    this.player.name = "Defauler";
    this.player.title = "The Adventurer";
  }

  changePhase(val: string) {
    this.phase = val;
  }

  createCharacter(val: object): void {
    this.player = this.service.createCharacter(val);
    this.changePhase("done");
  }
}
