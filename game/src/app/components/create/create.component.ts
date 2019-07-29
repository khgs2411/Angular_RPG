import { Component, OnInit } from "@angular/core";
import { fade, expand } from "src/assets/animations/animations";
import { PlayerService } from "src/app/services/player.service";
import { ExploreService } from "src/app/services/explore.service";
import { Character } from "src/app/interfaces/character";
import { Router } from "@angular/router";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
  animations: [fade, expand]
})
export class CreateComponent implements OnInit {
  public phase: string;
  public player: Character;
  public isOpen: boolean;
  constructor(private service: PlayerService, private router: Router) {}

  devParams() {
    this.player.name = "Defauler";
    this.player.title = "The Adventurer";
  }

  ngOnInit() {
    this.initiateLocalVariables();
  }

  initiateLocalVariables() {
    this.phase = "create";
    this.player = this.service.initiateCharacter();
    this.devParams();
  }

  changePhase(val: string) {
    this.phase = val;
    return this.phase;
  }

  createCharacter(val: object): void {
    this.changePhase("done");
    this.embark();
    this.player = this.service.createCharacter(val);
  }

  embark() {
    setTimeout(() => {
      this.changePhase("finish");
      setTimeout(() => {
        this.router.navigate(["explore"]);
      }, 1000);
    }, 2000);
  }
}